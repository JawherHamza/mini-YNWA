const { connect } = require("mongoose");

const DB_URI =
  "mongodb+srv://JawherHamza:Gerrard8@cluster0-hobdv.mongodb.net/test?retryWrites=true&w=majority";

connect(DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("SUCCESSFULLY CONNECTED TO DB"))
  .catch((err) => {
    throw err;
  });
