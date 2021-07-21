const Student = require("../app/student");
const assert = require("assert");

describe("Create tests", () => {
  it("create a user in db", () => {
    // assert(true);
    const testStudent = new Student({ name: "CreateTestUser" });
    testStudent
      .save()
      .then(() => {
        assert(!testStudent.isNew);
      })
      .catch((err) => console.log(err));
  });
});
