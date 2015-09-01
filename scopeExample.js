function foo(){
  quux = 35;
  var bar;
  function zip(){
    var quux = 99;
    bar = true;
  }
  return zip;
}
