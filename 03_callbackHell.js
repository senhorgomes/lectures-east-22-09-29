//fs? Filesystem?
//A node module that allows us to interact with the file system
const fs = require("fs");
//Read all three text files, and add them up
//How can I add these files together?
//run three readfiles? and add a console.log at the end?
//Can we add some sort of delay to the console.log? Maybe a setTimeout?
let totalNumber = 0
fs.readFile("./data1.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    //This file number is 10
    totalNumber += Number(data);
    fs.readFile("./data2.txt", "utf8", (err1, data1) => {
      if (err1) {
        console.log(err1);
      } else {
        //This file number is 20
        totalNumber += Number(data1);
        fs.readFile("./data3.txt", "utf8", (err2, data2) => {
          if (err) {
            console.log(err2);
          } else {
            //This file number is 30
            totalNumber += Number(data2);
            console.log(totalNumber)
          }
        });
      }
    });
  }
});