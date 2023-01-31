const csv = require("csvtojson");
const fsPromises = require("fs/promises");

const csvFilePath = "src/files/task2/nodejs-hw1-ex2.csv";

const convertToJsonAndSaveToTxTFile = () => {
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      jsonObj.forEach((el) => {
        fsPromises.appendFile(
          "src/files/task2/nodejs-hw1-ex2.txt",
          `${JSON.stringify(el)}\n`,
          (err) => {
            if (err) {
              console.log(err);
            }
            console.log("Appended!");
          }
        );
      });
    });
};

convertToJsonAndSaveToTxTFile();

module.exports = {
  convertToJsonAndSaveToTxTFile,
};
