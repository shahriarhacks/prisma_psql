import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";
import router from "./app/routes";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));

// Calling all routes
app.use("/api/v1", router);

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server Health is good",
    description: "API Health is good",
  });
});

export default app;
