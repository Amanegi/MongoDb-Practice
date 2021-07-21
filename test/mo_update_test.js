const Student = require("../app/student");
const assert = require("assert");

describe("Update tests", () => {
  let user;
  //before updating we need to create one
  beforeEach((done) => {
    user = new Student({ name: "UpdateTestUser" });
    user.save().then(() => done());
  });
  // update the above user in db
  it("update a user from db", (done) => {
    user.set("name", "TestUserUpdated");
    user
      .save()
      .then(() => Student.find({}))
      .then((students) => {
        assert(students[0].name === "TestUserUpdated");
        done();
      });
  });
});
