import { reportsModel } from "./reports.schema.js";

export const createReportModel=async(reportData)=>{
    return await new reportsModel(reportData).save();
}

export const searchReportModel=async(reportData)=>{
    return await reportsModel.findOne(reportData);
}

export const getReportsByPatientIdModel=async(patientId)=>{
    return await reportsModel.find({patientId:patientId}).select({_id:0,__v:0});
}

export const getReportsByStatusModel=async(reportStatus)=>{
    return await reportsModel.find({status:reportStatus}).select({_id:0,__v:0});
}
