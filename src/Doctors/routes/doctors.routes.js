import express from "express";
import {doctorsRegistrationController,doctorsLoginController} from "../controller/doctors.controller.js";

export const doctorsRouter=express.Router();

doctorsRouter.route('/register').post(doctorsRegistrationController);
doctorsRouter.route('/login').post(doctorsLoginController);