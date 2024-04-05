import mongoose from "mongoose";

export const connectToDB = () => {
    // connection created
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true, 
        useUnifiedTopology: true,
    }).then(()=>console.log("connect sucessfull..."))
    .catch((err)=>console.log(err)); 
}