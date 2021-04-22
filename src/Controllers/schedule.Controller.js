const Patients = require("../Models/schedule.model");

class Schedule{
       async index(req,res) {
        const Schedules = await Patients.find();

        res.send({ data: Schedules})
       }
       

       async store(req, res) {
           const body = req.body;
           const schedule = await Patients.create(body);

           res.send({ data: schedule })
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

       async remove(req, res) {
        const { id } = req.params;
    
        try {
          const schedule = await Patients.findById(id);
    
          if (!schedule) {
            return res.send({ message: "Patient not exist" });
          }
    
          await schedule.remove();
    
          res.send({ message: "schedule removed" });
        } catch (error) {
          res.status(400).send({ message: error.message });
        }
      }





}

module.exports = new Schedule()
