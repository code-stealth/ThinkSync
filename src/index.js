const express = require("express");
const app = express();
const mongoose = require("mongoose");

//importing the routes
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

// using the routes 
app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res)=>{
    res.send("Hello");
});

// Connecting the MongoDB to the Application. 
mongoose.connect("mongodb+srv://ChiragAgarwal:Chirag%40cr7@chiragdatabase.p7marin.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("MongoDB connected Successfully!");
    app.listen(5000, ()=>{
        console.log("Server started on port no. 5000");
    });
}).catch(()=>{
    console.log("error");
})


