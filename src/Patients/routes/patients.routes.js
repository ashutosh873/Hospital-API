import express from "express";
import {createPatientController,createPatientReportController,getPatientReportsController} from "../controller/patients.controller.js";
import {jwtAuth} from "../../../middlewares/jwt.auth.js";

export const patientsRouter=express.Router();

patientsRouter.route('/:id/all_reports').get(jwtAuth,getPatientReportsController);

patientsRouter.route('/register').post(jwtAuth,createPatientController);
patientsRouter.route('/:id/create_report').post(jwtAuth,createPatientReportController);