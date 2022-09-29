//Whats a promise?
// An obligation, commitment, agreement and an assertion
//Two outcomes
//Keep it, or break it
//In the outcome that Bryan does bring cookies = :)
//In the outcome that Bryan doesnt bring cookies = :(
//Promises is always pending
//Two outcomes
//Resolved(kept)
///Function 1
//Rejected(break)
///Function 2

// new Promise((resolve, reject)=>{
//   resolve()
//   reject()
// })
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //Attempt to run this code
//     //Math.random creates a number between 0 - 1
//     //This is just to simulate an error
//     if (Math.random() > 0.000001) {
//       reject("OH NO TOASTER IS BROKEN!")
//       return
//     }
//     resolve(console.log("Hey, your toast is ready!"))
//   }, 1000)
// }).catch((err)=>console.log(err))

const toaster = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Attempt to run this code
      //Math.random creates a number between 0 - 1
      //This is just to simulate an error
      if (timer === 500) {
        reject("OH NO TOASTER IS BROKEN!" + timer)
        return
      }
      resolve("Hey, your toast is ready!" + timer)
    }, timer)
  })
}

// toaster(2000).then((message)=>console.log(message)).catch((error)=>console.log(error))

//Simple way
toaster(5000)
  .then((msg) => {
    console.log(msg);
    //Two possible return values are resolve or reject
    return toaster(4000).then

  })
  .then((msg1)=> {
    console.log(msg1, "Second toaster");
    return toaster(3000);
  })
  .then((msg1)=> {
    console.log(msg1, "Second toaster");
    return toaster(2000);
  })
  .then((msg1)=> {
    console.log(msg1, "Second toaster");
    return toaster(1000);
  })
  .then((msg1)=> {
    console.log(msg1, "Second toaster");
  })
  .catch((err) => console.log(err));
  toaster(5000)
  .then((msg) => {
    console.log(msg);
    //Two possible return values are resolve or reject
    return toaster(4000).then

  })
  .then((msg1)=> {
    console.log(msg1, "Second toaster");
    return toaster(3000);
  })
  .then((msg1)=> {
    console.log(msg1, "Second toaster");
    return toaster(2000);
  })
  .then((msg1)=> {
    console.log(msg1, "Second toaster");
    return toaster(1000);
  })
  .then((msg1)=> {
    console.log(msg1, "Second toaster");
  })
  .catch((err) => console.log(err));
