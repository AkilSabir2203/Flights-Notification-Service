import express from "express";
import amqplib from "amqplib";

import { ServerConfig } from "./config/index.js";
import apiRoutes from "./routes/index.js";
import { EmailService } from "./services/index.js";

async function connectQueue() {
    try {
        const connection = await amqplib.connect("amqp://rabbitmq:5672");
        const channel = await connection.createChannel();

        await channel.assertQueue("noti-queue");

        channel.consume("noti-queue", async (data) => {
            if (!data) return;

            try {
                const rawContent = data.content.toString();
                const object = JSON.parse(rawContent);

                await EmailService.sendEmail(
                    ServerConfig.GMAIL_EMAIL,
                    object.recepientEmail,
                    object.subject,
                    object.text
                );
                console.log(object);
                channel.ack(data); 
            } catch (error) {
                console.error("❌ Message Processing Error:", error.message);
                channel.ack(data); 
            }
        });

        console.log("📨 RabbitMQ connected & consuming noti-queue");
    } catch (error) {
        console.error("Queue connection error:", error);
    }
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server is listening on port ${ServerConfig.PORT}`);
  await connectQueue();
});
