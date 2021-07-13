const mongoose = require("mongoose");

const connectDb = async () => {
  const dbConn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log("Mongo db Servidor Atlas conectado", dbConn.connection.host);
};

module.exports = connectDb;
