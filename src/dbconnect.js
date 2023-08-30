const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        // console.log('before');
        await mongoose.connect("mongodb+srv://ChiragAgarwal:Chirag%40cr7@chiragdatabase.p7marin.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // console.log('after');
        
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDatabase;