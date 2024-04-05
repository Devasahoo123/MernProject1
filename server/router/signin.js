import User  from "../model/userSchema.js";
import bcrypt  from 'bcryptjs';
import  jwt from 'jsonwebtoken';

const signin = async(req,res)=>{
    const {email,password} = req.body;
     try{
            if(!email || !password) return res.status(400).send({error:"Please enter all fields"});
            
            //checking if user exists or not
            let user = await User.findOne({email: email});
            if(!user){
              return res.status(400).json('User not found');
            }
            else {
                const isMatch = await bcrypt.compare(password,user.password);
                const token =await user.generateAuthTocken();

                // here we login page and user logout in some time
                res.cookie("jwtoken", token,{
                    expires : new Date(Date.now()+25892000000),
                    httpOnly: true
                });

                if(!isMatch){  // if user exist in 
                    return res.status(400).json({error: "Invalid Inputs"});
                }
                else{
                    res.status(200).send({message: "Signin In"});
                }
            }          
        }catch(e){
            console.log("Error in SignIn", e);
            return res.status(500).json('Internal Server Error')
        }
}


export default  signin;