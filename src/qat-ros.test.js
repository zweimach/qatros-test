const qatRos = require("./qat-ros");

describe("qatRos", () => {
  it("returns an array of QatRos string", () => {
    expect(qatRos(15)).toStrictEqual([
      "1",
      "2",
      "Qat",
      "4",
      "Ros",
      "Qat",
      "7",
      "8",
      "Qat",
      "Ros",
      "11",
      "Qat",
      "13",
      "14",
      "QatRos",
    ]);
  });
});
