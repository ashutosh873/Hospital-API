import mongoose from "mongoose";

const reportsSchema=mongoose.Schema({
    doctor:{
        type:String,
        required:true
    },
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patients',
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"]
    },
    date:{
        type:Date,
        required:true
    }
});

export const reportsModel=mongoose.model('reports',reportsSchema);