const express = require("express");
const app = express();


const connectDatabase = require("./dbconnect");

connectDatabase();
//importing the routes
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

// using the routes 
app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res)=>{
    res.send("Hello");
});

app.listen(5000, ()=>{
    console.log("Server started on port no. 5000");
});
