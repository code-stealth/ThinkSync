const express = require("express");
const { signup, signin } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/", (req, res)=>{
    res.status(202).send("this is user");
});
userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

module.exports = userRouter;