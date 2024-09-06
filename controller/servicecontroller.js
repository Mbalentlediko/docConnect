import express from "express";
import bodyParser from "body-parser";
import { services } from "../model/services.js";

const serviceRouter = express.Router();
const serviceController = new services();
serviceRouter.use(bodyParser.json());

serviceRouter.get("/", (req, res) => {
  serviceController.fetchServices(req, res);
});
serviceRouter.get("/:id", (req, res) => {
  serviceController.fetchService(req, res);
});
serviceRouter.post("/add", (req, res) => {
  serviceController.addService(req, res);
});
serviceRouter.patch("/:id", (req, res) => {
  serviceController.updateService(req, res);
});
serviceRouter.delete("/:id", (req, res) => {
  serviceController.deleteService(req, res);
});

export { serviceRouter };
