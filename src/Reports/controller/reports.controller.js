import {createReportModel,searchReportModel,getReportsByPatientIdModel,getReportsByStatusModel} from "../model/reports.repository.js";

export const createReportController=async(reportInput)=>{
    try{
        const reportAlreadyExists=await searchReportModel(reportInput);
        let reportInfo={report:'',status:''};
        if(reportAlreadyExists){
            reportInfo.report=reportAlreadyExists;
            reportInfo.status=409;
        }else{
            const newReport=await createReportModel(reportInput);
            reportInfo.report=newReport;
            reportInfo.status=201;
        }
        return reportInfo;
    }catch(err){
        console.log(err);
        res.status(500).send("Internal server error");
    }
}

export const getAllReportsOfPatientController=async(patientId)=>{
    try{
        const patientReports=await getReportsByPatientIdModel(patientId);
        return patientReports;
    }catch(err){
        console.log(err);
    }
}

export const getReportsByStatusController=async(req,res,next)=>{
    const reportStatus=req.params.status;
    try{    
        const reports=await getReportsByStatusModel(reportStatus);
        res.status(200).send(reports);
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}
