"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = (0, express_1.Router)();
routes.get("/", function (request, response) {
    console.log(request.query);
    return response.send(request.query['hub.challenge']);
});
routes.post("/", function (request, response) {
    console.log(request.body);
    return response.json({});
});
exports.default = routes;
