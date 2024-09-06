import express from "express";
import bodyParser from "body-parser";
import { doctors } from "../model/doctors.js";

const doctorRouter = express.Router();
const doctorContoller = new doctors();
doctorRouter.use(bodyParser.json());

doctorRouter.get("/", (req, res) => {
  doctorContoller.fetchDoctors(req, res);
});

doctorRouter.get("/recent", (req, res) => {
  doctorContoller.recentDoctors(req, res);
});

doctorRouter.get("/:id", (req, res) => {
  doctorContoller.fetchDoctor(req, res);
});

doctorRouter.post("/add", (req, res) => {
  doctorContoller.addDoctor(req, res);
});

doctorRouter.patch("/:id", (req, res) => {
  doctorContoller.updateDoctor(req, res);
});

doctorRouter.delete("/:id", (req, res) => {
  doctorContoller.deleteDoctor(req, res);
});

export { doctorRouter };
