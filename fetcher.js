const request = require("request");
const fs = require("fs");
const input = process.argv;
console.log(input);
const URL = input[2];
const file = input[3];
request(URL, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
  fs.writeFile(file, body, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded adn saved ${body.length} bytes to ./index.html`);
  });
});
