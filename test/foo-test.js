var tape = require("tape"),
    foo = require("../");

tape("foo() returns 42", function(test) {
  test.equal(foo.yaxisLinear(), 42);
  test.end();
});
