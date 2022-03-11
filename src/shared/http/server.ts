import CustomException from "@shared/exceptions/CustomException";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof CustomException) {
        return response.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message
        });
    }

    return response.status(500).json({
        status: 500,
        message: "Internal Server Error"
    })
});

app.listen(9000, () => {
    console.log("🚀 SERVER START ON PORT 9000 🚀");
})