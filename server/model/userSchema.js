import mongoose from "mongoose";
import bcrypt  from "bcryptjs";
import  jwt from 'jsonwebtoken';

 const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String, 
        required :  true ,
        unique   : true
    },
    phone:{
        type: Number,

    },
    password:{
        type: String,  
        required : true
    },
    cpassword:{
        type: String,  
        required : true
    }
    ,
    tokens:[
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

 });

// we are hashing the password
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.cpassword = (this.password === this.cpassword);
        this.password = await bcrypt.hash(this.password,10) ;
    }
    next();
});


// genertaing tocken
userSchema.methods.generateAuthTocken = async function(){
    try{
        let token= jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : token});
        this.save();
        return token;
    }
    catch(err){
        console.log(err);
    }
}

 const User = mongoose.model("User",userSchema);
 export default User;


 