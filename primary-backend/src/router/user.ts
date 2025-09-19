import { Router } from "express";
import { authMiddleware } from "../middleware";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const router = Router();

router.post("/signup", async (req, res) => {
  // Registration logic here

  const body = req.body;
  const parsedBody = SignupSchema.safeParse(body);

  if (!parsedBody.success) {
    return res.status(411).json({ error: parsedBody.error });
  }

  const userExists = await prismaClient.user.findFirst({
    where: {
      email: parsedBody.data.username,
    },
  });

  if (userExists) {
    return res.status(411).json({ error: "User already exists" });
  }

  await prismaClient.user.create({
    data: {
      email: parsedBody.data.username,
      password: parsedBody.data.password,
      name: parsedBody.data.name,
    },
  });
  res.status(200).json({ message: "User registered" });
});

router.post("/signin", async (req, res) => {
  // Login logic here
  const body = req.body;
  const parsedBody = SigninSchema.safeParse(body);

  if (!parsedBody.success) {
    return res.status(411).json({ error: parsedBody.error });
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: parsedBody.data.username,
      password: parsedBody.data.password,
    },
  });

  if (!user) {
    return res.status(411).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      // @ts-ignore
      id: user.id,
    },
    JWT_SECRET
  );

  res.status(200).json({token});
});

router.get("/profile", authMiddleware, async (req, res) => {
  // Login logic here
  //@ts-ignore
  const id = req.id;

  const user = await prismaClient.user.findFirst({
    where: {
      id
    },
    select: {
      name: true,
      email: true,
    },
  });

  return res.status(200).json({user});
});


export const userRouter = router;
