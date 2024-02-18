import { appServer } from "./app.js";
import {connectDB} from "./config/db.js";

appServer.listen(process.env.APP_PORT,(err)=>{
    if(err){
        console.log("Following error occurred while connecting to the app server - "+err);
    }else{
        console.log("Server is listening at port "+process.env.APP_PORT);
        connectDB();
    }
});