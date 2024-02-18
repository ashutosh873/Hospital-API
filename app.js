import express from "express";
import dotenv from "dotenv";
import path from "path";
import {doctorsRouter} from "./src/Doctors/routes/doctors.routes.js";
import {patientsRouter} from "./src/Patients/routes/patients.routes.js";
import {reportsRouter} from "./src/Reports/routes/reports.routes.js";

export const appServer=express();
const envVarPath=path.resolve('./config/Hospital_API.env');
dotenv.config({path:envVarPath});

appServer.use(express.json());

appServer.get('/',(req,res,next)=>{
    res.status(200).send("Welcome to the Hospital API! As this is a REST API without frontend, it can be tested through Postman");
});
appServer.use('/doctors',doctorsRouter);
appServer.use('/patients',patientsRouter);
appServer.use('/reports',reportsRouter);
