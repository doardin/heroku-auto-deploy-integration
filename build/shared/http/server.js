"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CustomException_1 = __importDefault(require("@shared/exceptions/CustomException"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(function (error, request, response, next) {
    if (error instanceof CustomException_1.default) {
        return response.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message
        });
    }
    return response.status(500).json({
        status: 500,
        message: "Internal Server Error"
    });
});
var port = process.env.PORT || 9000;
app.listen(port, function () {
    console.log("\uD83D\uDE80 SERVER START ON PORT ".concat(port, " \uD83D\uDE80"));
});
