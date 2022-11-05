var assert = require("assert");
//Case 1 : No error
assert.ifError(0);
//Case 2 : throws 1
assert.ifError(1);
//Case 3 : throws error
assert.ifError("error");
