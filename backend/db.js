const mongoose =require('mongoose');
const dotenv = require("dotenv")
dotenv.config()

const connectToMongo=async()=>{
  try {
    await mongoose.connect(process.env.DATABASE,()=>{
         console.log("Connected to Mongo Successfully");
    
      })
  } catch (error) {
    handleError(error);
  }
  
}
module.exports = connectToMongo;