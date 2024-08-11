import mongoose from "mongoose"
const URL = "mongodb+srv://kemich:Viva7lasvegan@cluster0.5u4cmkt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export const dataBaseConnection = async() => {
try {
    await mongoose.connect( URL);
    console.log("DATA BASE IS CONNECTED");
}
catch (error) {
console.log(error);
}
};