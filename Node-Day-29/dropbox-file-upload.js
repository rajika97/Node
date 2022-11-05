//Name of the file : dropbox-file-upload.js
//Including the required moduless
var request = require("request");
var fs = require("fs");

//enter your access token
var access_token =
  "sl.BSi_wccDUqBUamUcRjCKKla2FUAL_OSfAvvGYg9Uz5VaNyeKU6DHYPkBF2I_9OVMpDcEhYXKUKkgu-Ng8Jd8iKHb14j6rhak01gkeQvwUZ-tX_ZwN8CjV7wRGvAvYvb-GBvjT6g";
//Name of the file to be uploaded
var filename = "test.jpg";
//reading the contents
var content = fs.readFileSync(filename);
//write your folder name in place of YOUR_PATH_TO_FOLDER
// For example if the folder name is njera then we can write it in the following way :
// "Dropbox-API-Arg": "{\"path\": \"/njera/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}"
options = {
  method: "POST",
  url: "https://content.dropboxapi.com/2/files/upload",
  headers: {
    "Content-Type": "application/octet-stream",
    Authorization: "Bearer " + access_token,
    "Dropbox-API-Arg":
      '{"path": "/' +
      filename +
      '","mode": "overwrite","autorename": true,"mute": false}',
  },
  body: content,
};

request(options, function (err, res, body) {
  console.log("Err : " + err);
  console.log("res : " + res);
  console.log("body : " + body);
});
