import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
    return response.send(request.query['hub.challenge']);
});

export default routes;