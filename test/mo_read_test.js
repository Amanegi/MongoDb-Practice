const Student = require("../app/student");
const assert = require("assert");

describe("Read tests", () => {
  let user;
  //before reading we need to create one
  beforeEach((done) => {
    user = new Student({ name: "ReadTestUser" });
    user.save().then(() => done());
  });
  // find the above user in db
  it("read a user from db", (done) => {
    Student.find({ name: "ReadTestUser" }).then((students) => {
      // mongo _id is cannot be compared directly as it's BSON
      assert(user._id.toString() === students[0]._id.toString());
      done();
    });
  });
});
