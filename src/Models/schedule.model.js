const mongoose = require("mongoose")

const scheduleSchema = new mongoose.Schema({
    patientName: String,
    patientBirthday: Date,  
    scheduleDay: Date,
    scheduleHour: Date,
    _id:Date,
}, {

     timestamp: true
})

const ScheduleModel = mongoose.model("patient", scheduleSchema)


module.exports = ScheduleModel;