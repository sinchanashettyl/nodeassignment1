//to create the promise and to display a message and call the promise

//created a promise using promise constructor to make an asynchronous call either resolve or reject
let p = new Promise((resolve, reject) => {
    //defining variable a
    let a = "";
    //using if condition here the output is successfull promise, the call to resolve moves the promise object to resolved state.
    if (a == "") {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
  
//as the promise is successfull , the then method returns the promise and goes through resolved state only.
  p.then((message) => {
    console.log(`This is  ${message}`);
  }).catch((message) => {
    console.log(`This is  ${message}`);
  });
