const express = require('express');
const app = express();
const fs = require('fs');
const request = require('request');
var cp = require('child_process');
const content = 'Some content!';
const { exec } = require('child_process');
var cors = require("cors");

function decodeTextFile(filePath) {
  // Read the file into a buffer
  const buffer = fs.readFileSync(filePath);

  // Decode the buffer into a string
  const decodedText = buffer.toString();

  return decodedText;
}
app.use(cors());
app.use(express.json());

app.post("/api", (req, res) => {
  console.log(req.body.a)
  res.json(req.body.a)
  fs.writeFile('/home/elior/express3/protocol.json', JSON.stringify(req.body.a), err => {
    if (err) {
      console.error(err);
    }
  });
});
app.post("/api2", (req, res) => {
  console.log(req.body.a)
  res.json(req.body.a)
  fs.writeFile('/home/elior/express3/packetdata.json', JSON.stringify(req.body.a), err => {
    if (err) {
      console.error(err);
    }
  });
});
app.post("/api3", (req, res) => {
  console.log(req.body.a)
  res.json(req.body.a)
  fs.writeFile('/home/elior/express3/packetdata2.json', JSON.stringify(req.body.a), err => {
    if (err) {
      console.error(err);
    }
  });
  const message = {
    text: 'Hello from Node.js!'
  };

  // Send the message as an HTTP POST request
  request.post({
    url: 'http://localhost:8080',
    json: message
  }, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    console.log(`Response: ${response.statusCode} ${response.statusMessage}`);
  });

});
app.get('/get-decoded-text', (req, res) => {
  // Read and decode the text file
  const decodedText = decodeTextFile('/home/elior/express3/received_file.txt');

  // Send the decoded text as the response
  res.send(decodedText);
});
app.listen(5000, () => { console.log("Listening on port 5000") })
cp.exec('sh u.sh', function (err, stdout, stderr) {
  // handle err, stdout, stderr
  console.log(stdout);
  console.log(err);
  console.log(stderr)
});