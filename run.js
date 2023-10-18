// Developer: Osama Hussain
// GitHub:    https://github.com/OsamaHussain

// Importing Required Packages
const fs = require("fs");
const path = require("path");

// Configuration for filePath
const directory = __dirname;
const fileName = "story.txt";
const filePath = path.join(directory, fileName);

// Creating Story Variable and Putting File Data into it
fs.readFile(filePath, "utf-8", (err, story) => {
  if (err) {
    console.log(`Error reading the file: ${err}`);
  } else {
    // Now Reading Each Character to Perform TypeWriter Effect
    console.log("----------x----------x----------x---------");
    console.log();
    for (let i = 0; i < story.length; i++) {
      setTimeout(() => {
        process.stdout.write(story.charAt(i));
      }, i * 100);
    }

    // This is Optional to add Extra Line at the end of Story
    setTimeout(() => {
      console.log();
      console.log();
      console.log("----------x---------x---------x---------");
    }, story.length * 100);
  }
});
