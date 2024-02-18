import express from "express";
import {getReportsByStatusController} from "../controller/reports.controller.js"

export const reportsRouter=express.Router();

reportsRouter.route('/:status').get(getReportsByStatusController);