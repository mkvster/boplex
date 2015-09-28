console.log("Boplex Version: " + Boplex.Version);

boplexTest.Point.prototype.className = "boplexTest.Point";
var pt = new boplexTest.Point("A", 3, Boplex.random(0, 5), function(pt, pos){
  console.log("Point \"" + pt.getName() + "\" has been moved to:");
  console.dir(pos);
});

console.log(pt.className);
console.log("Point \"" + pt.getName() + "\" is located at:");
console.dir(pt.getPosition());
pt.setPosition({x: 4, y: 5});

console.log(boplexTest.Point.prototype);
console.dir(boplexTest.Point.prototype);
