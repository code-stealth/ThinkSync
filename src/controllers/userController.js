const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const SECRET_KEY = "NOTESAPI"

const signup = async(req, res)=>{

    const {username, email, password} = req.body;

    try {
        const existingUser = await userModel.findOne({email: email});
        // Checking for Existing User.
        console.log("exasdg");
        if(existingUser){
            return res.status(400).json({message : "User already exists"});
        }
        // Hashed Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // User Creation
        const result = await userModel.create({
            email: email, 
            password: hashedPassword,
            username: username
        });

        // Token Generate
        const token = jwt.sign({email : result.email, id : result._id}, SECRET_KEY);
        res.status(201).json({user: result, token: token});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

    


    
    
    
};

const signin = async(req, res) => {
    //
}

module.exports = { signup, signin };