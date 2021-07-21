const mongoose = require("mongoose");
mongoose.Promise = global.Promise; // using ES6 Promises instead of Q or BlueBird

const DB_NAME = "mongotube";

before((done) => {
  mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .once("open", () => {
      console.log("DB connected.");
      done(); // calls the function which should be called once this connection is successful
    })
    .on("error", (err) => console.log("DB connection error : " + err));
});

beforeEach((done) => {
  mongoose.connection.collections.students.drop(() => done());
});
