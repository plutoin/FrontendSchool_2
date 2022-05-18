var outer = function () {
  var a = 1;

  var inner = function () {
    var b = 6;
    var c = 7;
    a + a + b + c

    console.log(a)
  }
  return inner;
}

var newInner = outer();
newInner();