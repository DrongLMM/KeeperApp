import mongoose from "mongoose";



const dbConnection = async(DB_USER, DB_PWD)=>{
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.fev3chc.mongodb.net/keeperapp`);

        console.log("DB is Connected");
        
    } catch (error) {
        console.log(error.message);
        console.log("DB is not connected");
        process.exit(1);
    }
}


export default dbConnection;