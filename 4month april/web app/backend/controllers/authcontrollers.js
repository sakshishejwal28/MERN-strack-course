// register api

const register = async(req,res) =>{
    try {
         res.status(201).json({ message: "register is sucessfully"});
    } catch (error) {
        console.log(error)
    }
}

// login

const login =(req,res) =>{
    try {
         res.status(200).json({ message: "login  is sucessfully"});
    } catch (error) {
      console.log(error)  
    }
}

module.exports={register,login}