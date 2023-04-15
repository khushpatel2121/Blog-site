import express  from "express";
import User from "../Models/users.js"
import bcrypt from 'bcrypt'

const router = express.Router();

router.post("/register" ,async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass  = await bcrypt.hash(req.body.password,salt)
         const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashPass,
        })

        const user = await newUser.save();  
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post("/login", async(req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("invalid username");

        const validate = await bcrypt.compare(req.body.password, user.password);
        !validate && res.status(400).json("invalid password");
        
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        console.log(error);
    }
})

export default router;