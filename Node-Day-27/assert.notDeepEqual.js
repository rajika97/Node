var assert = require("assert");
var a = 10;
var b = 12;
var c = "10";

//Case 1
assert.notDeepEqual(
  a,
  b,
  "Nothing printed because they are using !== for comparison"
);
//Case 2
assert.notDeepEqual(a, c, "Error because values match here");
