import mongoose from "mongoose";

const connnectToDatabase = () => {
  mongoose
    .connect(process.env.DBURI, {})
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    // .catch((err) => console.log(`Error in Connecting MongoDB: ${err} `));
};

export default connnectToDatabase;