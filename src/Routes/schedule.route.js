const express = require('express');

const ScheduleController = require("../Controllers/schedule.Controller")

const routes = express.Router();

routes.get("/schedule", ScheduleController.index);
routes.post("/todo", ScheduleController = require(ScheduleController.store))

module.exports = routes;