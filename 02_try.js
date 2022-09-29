//Can try and catch an error? Why would we want to do that?


const toaster = (timer) => {
  setTimeout(() => {
    //Attempt to run this code
    try {
      //Math.random creates a number between 0 - 1
      //This is just to simulate an error
      if (Math.random() > 2) {
        throw new Error("YOUR TOASTER BROKE!")
      }
      console.log("Hey, your toast is ready!")
    //If an error occurs, catch it, and console.log the error, or something else
    } catch (error) {
      console.log(error, "JUST GRAB SOMETHING ON THE WAY!")
    }
  }, timer)
}

toaster(2000)
// console.log("Hey, don't forget your keys!");
setTimeout(() => {
  console.log("Hey, don't forget your keys!");
}, 3000);
