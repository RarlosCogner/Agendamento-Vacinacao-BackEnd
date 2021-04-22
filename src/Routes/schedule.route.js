const express = require("express");

const ScheduleController = require("../Controllers/schedule.Controller")

const routes = express.Router();

routes.get("/patient", ScheduleController.index);
routes.post("/patient", ScheduleController.store)
routes.get("/patient/:id", ScheduleController.getOne);
routes.delete("/patient/:id", ScheduleController.remove)

module.exports = routes;