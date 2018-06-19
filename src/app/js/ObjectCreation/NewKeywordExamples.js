
let MakeObject = function(constructor){
    var obj ={}
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj,Array.from(arguments).slice(1)) ||obj;

}
let Person = function(name){
    this.name=name;
}
Person.prototype.sayName = function(){
    console.log("My name is ", this.name);
}

let person = new Person ("Jeevan");
person.sayName();

let personTwo= MakeObject (Person,"Jeevan");
personTwo.sayName();