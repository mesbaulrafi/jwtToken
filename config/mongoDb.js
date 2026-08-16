// const mongoose = require("mongoose");

// const dbconnection = () => {
//   return mongoose
//     .connect(
//       `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster1.gxwb1gq.mongodb.net/${process.env.DB_COLLECTION_NAME}?appName=Cluster1`,
//     )
//     .then(() => {
//       console.log("Database Connected");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// module.exports = dbconnection;
const mongoose = require("mongoose");

const mongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected successfully");
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = mongoDb;