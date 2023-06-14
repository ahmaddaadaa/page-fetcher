const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        console.error('Error saving the file:', err);
      } else {
        const fileSize = fs.statSync(filePath).size;
        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
      }
    });
  }
});