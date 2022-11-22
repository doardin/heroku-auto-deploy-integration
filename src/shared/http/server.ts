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

    console.log(error.message);
    console.log(error.stack);
    
    return response.status(500).json({
        status: 500,
        message: "Internal Server Error"
    })
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`🚀 SERVER START ON PORT ${port} 🚀`);
})