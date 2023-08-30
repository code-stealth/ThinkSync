const express = require("express");
const noteRouter = express.Router();

noteRouter.get("/", (req, res)=>{
    res.send("Note get request!");
})

noteRouter.post("/", (req, res)=>{
    res.send("Note post request!");
})

module.exports = noteRouter;