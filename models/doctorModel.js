const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    userId:{
        type: String,
    },
    firstName:{
        type:String,
        required:[true,'First name is required']
    },
    lastName:{
        type:String,
        required:[true,'Last name is required']
    },
    phone:{
        type:String,
        required:[true,'Phone number is required']
    },
    email:{
        type:String,
        required:[true,'Email is required']
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'Address is required']
    },
    specialization:{
        type:String,
        required:[true,'Specialigation is required']
    },
    experience:{
        type:String,
        required:[true,'Experienced is required']
    },
    feesPerCunsaltation:{
        type:Number,
        required:[true,'fee is required']
    },
    timings:{
        type:Object,
        required:[true,'Timing is required']
    },
},{timestamps:true});


const doctorModel = mongoose.model('users',doctorSchema)
module.exports = doctorModel