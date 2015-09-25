console.log("Boplex Version: " + Boplex.Version);

var bo = new Boplex.BaseObject();
console.log(bo.getClassName());

var pt = new boplexTest.Point("A", 3, Boplex.random(0, 5), function(pt, pos){
  console.log("Point \"" + pt.getName() + "\" has been moved to:");
  console.dir(pos);
});
console.log(pt.getClassName());
console.log(pt.getName());
console.dir(pt.getPosition());
pt.setPosition({x: 4, y: 5});
