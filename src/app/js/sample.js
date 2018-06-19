var Person = function(){
    this.name;
    var count =100
    this.getCount = function(){
        return count;
    }
}
Person.prototype.sayName= function(){
    console.log(this.name)
}
var person = new Person()
person.name="Jeevan"
person.sayName()
console.log(person.getCount())