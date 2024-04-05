import user from "../model/userSchema.js";
// create documnets

const createDB = async  () => {
    try{
    const reactPlaylist = new user({
        name: "Deva1" , 
        email:"deva1@gmail.com",  
        phone:9876543211,
        password:"qwerty1",
        cpassword:"qwerty1"        
    });
    const res = await reactPlaylist.save();
    console.log(`Data ${res.name} is saved in database`);
}
catch(err){
    console.log("errpr is ",err);
}
};

export default  createDB;