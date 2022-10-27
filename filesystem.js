//create a file using fs module
const fs = require("fs");

//using async function it makes the function return the  promise
async function writeFile(filename, txt) {
  try {
    //await function it pause the execution and waits for resolved promise
    await fs.promises.writeFile(filename, txt);
    console.log("File Successfully created");
  } catch (err) {
    console.log(err);
  }
}
writeFile("file1", "HelloWorld ");
