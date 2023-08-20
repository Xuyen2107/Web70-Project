import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

export const connectToDatabase = async () => {
   try {
      const connection = await mongoose.connect(
         "mongodb+srv://social-app-admin:admin123@social-app.gy8vwug.mongodb.net/?retryWrites=true&w=majority"
      );
      console.log(`Database is connected at ${connection.connection.host}`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};
