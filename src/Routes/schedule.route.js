const express = require("express");

const ScheduleController = require("../Controllers/schedule.Controller")

const routes = express.Router();

routes.get("/patient", ScheduleController.index);
routes.post("/patient", ScheduleController.store)
Routes.get("/patient/:id", TodoController.getOne);

module.exports = routes;