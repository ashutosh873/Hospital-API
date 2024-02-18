import {createPatientModel,searchPatientModel,updatePatientRecordModel,getPatientById} from "../model/patients.repository.js";
import { createReportController,getAllReportsOfPatientController } from "../../Reports/controller/reports.controller.js";

export const createPatientController=async(req,res,next)=>{
    const patientData=req.body;
    try{
        const patientAlreadyExists=await searchPatientModel(patientData);
        if(patientAlreadyExists){
            res.status(409).send("Patient with this phone no already exists. Please find the patient info - "+'\n'+patientAlreadyExists);
        }else{
            const newPatient=await createPatientModel(patientData);
            res.status(201).send("New Patient Successfully registered"+'\n'+newPatient);
        }
        
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}

export const createPatientReportController=async(req,res,next)=>{
    const reportInput=req.body;
    try{
        reportInput.patientId=req.params.id;
        const reportRecord=await createReportController(reportInput);
        if(reportRecord.status==409){
            res.status(409).send("Report already exists"+'\n'+reportRecord.report);
        }else{
            const updatePatientRecord=await updatePatientRecordModel(reportRecord.report.patientId,reportRecord.report._id);
            res.status(201).send("Report added successfully"+'\n'+reportRecord.report);
        }  
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}

export const getPatientReportsController=async(req,res,next)=>{
    const patientId=req.params.id;
    try{
        const listOfPatientReports=await getAllReportsOfPatientController(patientId);
        res.status(200).send(listOfPatientReports);
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}