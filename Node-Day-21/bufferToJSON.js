//Name of the file : bufferToJSON.js
var buf = Buffer.from("Nodejsera");
var json = buf.toJSON(buf);
console.log(json);
