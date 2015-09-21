console.log("Boplex Version: " +Boplex.Version);

var bo = new Boplex.BaseObject();
console.log(bo.getClassName());

var pt = new boplexTest.Point("A", 3, 0);
console.log(pt.getClassName());
console.log(pt.getName());
console.dir(pt.getPosition());
