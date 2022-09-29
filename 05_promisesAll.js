//All the promises?
const fs = require("fs");

let totalNumber = 0
const readThisFilePlease = (path) => {
return new Promise((res, rej)=>{
  fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        rej(err);
      } else {
        //This file number is 10
          res(Number(data));
      }
    })
})
}
const printThis = () => {
  return 5;
}
console.log(printThis())

let newArray
Promise.all([
  readThisFilePlease("./data1.txt"),
  readThisFilePlease("./data2.txt"),
  readThisFilePlease("./data3.txt"),
]).then((arrayOfResolves) => {
  newArray = [...arrayOfResolves];
  console.log(newArray)
}).catch((err)=>{
  console.log(err, "Uh oh")
})

// Promise.race([toasterPromise(1000),
//     toasterPromise(2000),
//     toasterPromise(1500),]).then((data)=>{console.log(data)})
