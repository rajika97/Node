var assert = require("assert");
var a = 50;
var b = "50";
var c = 50.25;
//Case 1
assert.equal(a, b, "Nothing printed because they are using == for comparison");
//Case 2
assert.equal(a, c, "Error because values doesn't match");
