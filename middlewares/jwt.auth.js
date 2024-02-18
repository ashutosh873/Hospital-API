import jwt from "jsonwebtoken";

export const jwtAuth=(req,res,next)=>{
    const userToken=req.headers["authorization"];
    if(!userToken){
        res.status(401).send("Unauthorized access-Authentication token is not provided");
    }else{
        const isTokenValid=jwt.verify(userToken,process.env.JWT_SECRET_KEY);
        if(isTokenValid){
            next();
        }else{
            res.status(401).send("Invalid Token");
        }    
    }
}