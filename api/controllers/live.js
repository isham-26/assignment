import LiveTest from "../models/livetest.model.js";


export const livePost=async (req,res,next)=>{
    try{
        const newLive=new LiveTest(req.body);
        const live=await newLive.save();
        res.status(200).send(live);

    }catch(err){
        next(err)
    }
}


export const liveGet=async (req,res,next)=>{
    try{
        const live=await LiveTest.find();
        if(!live){
            const error = new Error("live test data not get");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).send(live);

    }catch(err){

    }
}