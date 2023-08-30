const express = require("express");

//importing the routes
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const app = express();

// using the routes 
app.use("/users", userRouter);
app.use("/note", noteRouter);

app.listen(5000, ()=>{
    console.log("Server started on port no. 5000");
});
