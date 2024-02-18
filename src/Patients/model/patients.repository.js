import {patientsModel} from "./patients.schema.js";

export const searchPatientModel=async(patientData)=>{
    return await patientsModel.findOne({phoneNo:patientData.phoneNo});
}

export const getPatientById=async(patientId)=>{
    return await patientsModel.findById(patientId);
}

export const createPatientModel=async(patientData)=>{
    return await new patientsModel(patientData).save();
}

export const updatePatientRecordModel=async(patientId,reportId)=>{
    return await patientsModel.findOneAndUpdate({
        _id:patientId
    },{
        $push:{reports:reportId}
    },{
        new:true
    });
}
