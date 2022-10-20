const fs = require("fs");


async function writeFile(filename, txt) {
  try {
    await fs.promises.writeFile(filename, txt);
    console.log("File Successfully created");
  } catch (err) {
    console.log(err);
  }
}
writeFile("file1", "HelloWorld ");