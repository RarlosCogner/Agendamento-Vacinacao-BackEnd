const { response } = require('express');

const Schedule = require('../Models/schedule.model');

class Schedule{
       async index(req,res) {
        const Schedules = await Schedule.find();

        res.send({data : Schedules})
       }

       async store(req, res) {
           const body = req.body;
           const schedule = await Schedule.create(body);

           response.send({data : schedule })
       }





}

module.exports = new Schedule()
