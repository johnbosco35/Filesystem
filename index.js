/** @format */

const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "index.html"),
  {
    encoding: "utf8",
  },
  (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  }
);
