import { userRouter } from "./controller/usercontroller.js";
import { serviceRouter } from "./controller/servicecontroller.js";
import { appointmentRouter } from "./controller/appointmentcontroller.js";
import { doctorRouter } from "./controller/doctorContoller.js";
import { errorHandling } from "./middleware/errorhandling.js";
import express from "express";
import { fileURLToPath } from 'url';
import { config } from 'dotenv'
config()
import cors from "cors";
import path from "path";

const app = express((req, res, next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Credentials","true");
  res.header("Access-Control-Allow-Methods","*");
  res.header("Access-Control-Request-Methods","*");
  res.header("Access-Control-Allow-Headers","*");
  res.header("Access-Control-Expose-Headers","Authorization");
next()
})
const port = +process.env.PORT || 4000;

app.use("/users", userRouter);
app.use("/services", serviceRouter);
app.use("/appointments", appointmentRouter);
app.use("/doctors", doctorRouter);
app.use(errorHandling)

app.use(
  express.static("./static"),
  express.json(),
  express.urlencoded({
    extended: true,
  }),
  cors()
);

app.get("^/$|/docConnect", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"));
});

app.get("*", (req, res) => {
  res.json({
    status: 404,
    msg: "Resource not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
