const mongoose = require('mongoose')

const scheduleSchema = new mongooseSchema({
    patientName: String,
    patientBirthday: Date,  
    scheduleDay: Date,
    scheduleHour: Date,
}, {

     timestamp: true
})

const Schedule = mongoose.model(('schedule', scheduleSchema))

module.exports = Schedule;