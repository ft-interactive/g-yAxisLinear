var tape = require("tape"),
    axis = require("../");

tape("yLabelOffset should be 0", function(test) {
  test.equal(axis.yaxisLinear().yLabelOffset(), 0);
  test.end();
});
