import jwt  from "jsonwebtoken";
import User from "../model/userSchema.js";

const Auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
    const rootUser = await  User.findById({_id:verifyToken._id,"tokens.token": token});
    if (!rootUser){
        throw new  Error("User not Found");
    }
    req.token=token;
    req.rootUser=rootUser;
    req.userID = rootUser._id;
    return next();
  }
  catch(err){
    res.status(401).send({error: 'Token is invalid'});
    console.log(err);
  }
}
export default Auth;