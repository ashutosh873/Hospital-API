import {createDoctorModel,isUserNameValidModel} from "../model/doctors.repository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const doctorsRegistrationController=async(req,res,next)=>{
    const doctorCreds=req.body;
    try{
        const newDoctor=await createDoctorModel(doctorCreds);
        res.status(201).send("Doctor Registered Successfully"+'\n'+newDoctor);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }

}

export const doctorsLoginController=async(req,res,next)=>{
    const doctorsLoginInfo=req.body;
    try{
        const ValidDoctor=await isUserNameValidModel(doctorsLoginInfo.username);
        if(!ValidDoctor){
            res.status(400).send("Invalid Username");
        }else{
            const isPasswordValid=await bcrypt.compare(doctorsLoginInfo.password,ValidDoctor.password);
            if(isPasswordValid){
                const authToken=jwt.sign({
                    username:ValidDoctor.username
                },process.env.JWT_SECRET_KEY,{
                    expiresIn:5*60
                });
                res.status(200).send(authToken);
            }else{
                res.status(400).send("Invalid Password");
            }
            
        }
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }   

}