import { Router } from "express";
import { authMiddleware } from "../middleware";
import { ZapCreateSchema } from "../types";
import { prismaClient } from "../db";
import { xid } from "zod";

const router = Router();

router.post("/", authMiddleware, async (req, res) => {
  const body = req.body;
  const parsedData = ZapCreateSchema.safeParse(body);

  if (!parsedData.success) {
    return res.status(411).json({
      message: "Invalid data",
    });
  }

  const zapId = await prismaClient.$transaction(async (tx) => {
    const zap = await tx.zap.create({
      data: {
        userId: (req as any).id,
        triggerId: "",
        actions: {
          create: parsedData.data.actions.map((xid, index) => {
            return {
              actionId: xid.availableActionId,
              sortingOrder: index,
            };
          }),
        },
      },
    });

    const trigger = await tx.trigger.create({
      data: {
        triggerId: parsedData.data.availableTriggerId,
        zapId: zap.id,
      },
    });

    await tx.zap.update({
      where: {
        id: zap.id,
      },
      data: {
        triggerId: trigger.id,
      },
    });

    return zap.id;
  });

  res.status(200).json({ zapId });
});

router.get("/", authMiddleware, async (req, res) => {
  // Login logic here
  //@ts-ignore
  const id = req.id;
  const zaps = await prismaClient.zap.findMany({
    where: {
      userId: id
    },
    include: {
      actions : {
        include : {
          type : true
        }
      },
      trigger : {
        include : {
          type : true
        }
      }
    }
  });


  res.status(200).json(zaps);
});

router.get("/:zapId", authMiddleware,async (req, res) => {
  //@ts-ignore
  const id = req.id;
  const { zapId } = req.params;


  const zap = await prismaClient.zap.findMany({
    where: {
      userId: id,
      id : zapId
    },
    include: {
      actions : {
        include : {
          type : true
        }
      },
      trigger : {
        include : {
          type : true
        }
      }
    }
  });

  res.status(200).json(zap);
});

export const zapRouter = router;
