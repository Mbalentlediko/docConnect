import express from "express";
import bodyParser from "body-parser";
import { appointments } from "../model/appointments.js";

const appointmentRouter = express.Router();
const appointmentcontroller = new appointments();
appointmentRouter.use(bodyParser.json());

appointmentRouter.get("/", (req, res) => {
  appointmentcontroller.fetchAppointments(req, res);
});

appointmentRouter.get("/recent", (req, res) => {
  appointmentcontroller.recentAppointments(req, res);
});

appointmentRouter.get("/:id", (req, res) => {
  appointmentcontroller.fetchAppointment(req, res);
});

appointmentRouter.post("/add", (req, res) => {
  appointmentcontroller.addAppointment(req, res);
});

appointmentRouter.patch("/:id", (req, res) => {
  appointmentcontroller.updateAppointment(req, res);
});

appointmentRouter.delete("/:id", (req, res) => {
  appointmentcontroller.deleteAppointment(req, res);
});

export { appointmentRouter };
