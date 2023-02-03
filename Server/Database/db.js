import mongoose from "mongoose";



export const Connection = async(username, password) => {
    URL = `mongodb://${username}:${password}@ac-ovyokyj-shard-00-00.rmsbs5y.mongodb.net:27017,ac-ovyokyj-shard-00-01.rmsbs5y.mongodb.net:27017,ac-ovyokyj-shard-00-02.rmsbs5y.mongodb.net:27017/?ssl=true&replicaSet=atlas-vj5d2t-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected successfully!")
    }
    catch (error){
        console.log("Error on connecting database " + error.message)
    }
}

export default Connection;