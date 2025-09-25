import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());
const client = new PrismaClient();
 
app.post("/hooks/catch/:userId/:zapId",async (req,res)=> {
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    // store in db a new tigger 
    await client.$transaction(async (tx:any) => {
        const run = await tx.zapRun.create({
            data : {
                zapId,
                metadata:body 
            } 
        })

        await tx.zapRunOutbox.create({
            data : {
                zapRunId: run.id,
            }
        })
    })

    res.json({
        success: true,
        message: "Hook received"

    })
    // push it to a queue for processing (redis/kafka)
})

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});