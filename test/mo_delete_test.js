const Student = require("../app/student");
const assert = require("assert");

describe("Delete tests", () => {
  let user;
  //before deleting we need to create one
  beforeEach((done) => {
    user = new Student({ name: "DeleteTestUser" });
    user.save().then(() => done());
  });
  // delete the above user in db
  it("delete a user from db", (done) => {
    Student.findByIdAndDelete(user._id)
      .then(() => Student.findOne({ name: "DeleteTestUser" }))
      .then((student) => {
        assert(student === null);
        done();
      });
  });
});
