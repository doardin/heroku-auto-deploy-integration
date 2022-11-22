import axios from "axios";
import { Router } from "express";

const routes = Router();
let callbackUrl = "";
routes.post("/set-callback-url", (request, response) => {
    callbackUrl = request.body.url;
    return response.json({
        status: "Success"
    })
});

routes.post("/", async (request, response) => {
    const res = await axios
        .create()
        .post(callbackUrl, request.body);
    console.log("Request response: " + res)
    return response.send();
});

routes.get("/", (request, response) => {
    return response.send(request.query['hub.challenge']);
});

export default routes;