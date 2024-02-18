import {doctorsModel} from "./doctors.schema.js";

export const createDoctorModel=async(doctorCreds)=>{
    return await new doctorsModel(doctorCreds).save();
}

export const isUserNameValidModel=async(doctorsUserName)=>{
    return await doctorsModel.findOne({
        username:doctorsUserName
    });
}