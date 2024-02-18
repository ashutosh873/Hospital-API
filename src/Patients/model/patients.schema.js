import mongoose from "mongoose";

const patientsSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Patient name is mandatory"]
    },
    phoneNo:{
        type:Number,
        required:[true,"Patient's phone number is missing"],
        unique:true
    },
    reports:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'reports'
        }
    
    ]
});

export const patientsModel=mongoose.model('patients',patientsSchema);