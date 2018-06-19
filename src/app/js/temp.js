var base ={
    name :"base"
}
var child = {} 
child.prototype = base;
child.name="child";
child.age=100
console.log("Name before deletion :",child.name)
delete child.name;
// property from prototype linkage shines through
console.log("Name after deletion :",child.name)

console.log("Age before deletion :",child.age)
delete child.age;
// Delete property as age property is not present in base object
console.log("Age after deletion :",child.age)

