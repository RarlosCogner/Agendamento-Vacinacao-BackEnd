const Patients = require("../Models/schedule.model");

class Schedule{
       async index(req,res) {
        const Schedules = await Patients.find();

        res.send({ Schedules})
       }
       

       async store(req, res) {
           const body = req.body;
           const schedule = await Patients.create(body);

           res.send({ schedule })
       }

       async getOne(req, res) {
          const{id} = req.params

          try{
              const schedule = await Patients.findById(id)
              res.send({data : schedule})
          } catch(error){
              res.json({message: error.message})
          }



       }





}

module.exports = new Schedule()
