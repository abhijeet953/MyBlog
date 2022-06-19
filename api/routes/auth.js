const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Register
router.post("/register",async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});
//login

router.post('/login' , async (req,res) =>{
    try {
        const user = await User.findOne({username: req.body.username});
//The code changes here for the if statement .. mine didnt worked with the code shown in the video

        if(!user)
        {
            return res.status(400).json("Wrong credentials!")
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated)
        {
            return res.status(400).json("Wrong credentials!");
        }

        const { password,...others} = user._doc;

        res.status(200).json(others);

    } catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;