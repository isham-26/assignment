import Test from "../models/test.model.js"


export const testPost=async (req,res,next)=>{
    try{
        const newTest=new Test(req.body);
        const test=await newTest.save();
        res.status(200).send(test);

    }catch(err){
        next(err)
    }
}


export const testGet=async (req,res,next)=>{
    try{
        const test=await Test.find();
        if(!test){
            const error = new Error("test data not get");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).send(test);

    }catch(err){
        next(err)
    }
}