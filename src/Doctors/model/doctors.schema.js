import mongoose from "mongoose";
import bcrypt from "bcrypt";

const doctorsSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

doctorsSchema.pre('save',async function(){
    this.password=await bcrypt.hash(this.password,12);
});

export const doctorsModel=mongoose.model('doctors',doctorsSchema);