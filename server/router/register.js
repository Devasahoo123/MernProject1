import User  from "../model/userSchema.js";

const register = async(req,res)=>{
   
    const {name,email,phone,password,cpassword}=req.body;
    // console.log(req.body); 
    if(!name || !email || !phone|| !password || !cpassword){
        return res.status(400).json({
            success:false,
            msg:"Please provide all fields"
          });
    }  
   
    //check password and confirm password are same 
    try{
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(422).json({error:'User already exists'});
        }
        const user = new User({name,email,phone,password,cpassword});

        const userRegister = await user.save();

        if(userRegister) {
            res.status(201).json({message: "User has been created successfully!"});
        }
    }catch(err){console.log(err)};
};

export default register;