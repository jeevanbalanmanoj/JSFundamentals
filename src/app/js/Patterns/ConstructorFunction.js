
let Person = function(name){
    this.name=name;
}
Person.prototype.sayName = function(){
    console.log("My name is ", this.name);
}

let person = new Person("Jeevan");
person.sayName();

// new interally does the following
/*
1. create an object with prototype as the constructor function's prototype
2. apply constructor funtion with that object and  return that call's return value if any or else return the object created above
*/