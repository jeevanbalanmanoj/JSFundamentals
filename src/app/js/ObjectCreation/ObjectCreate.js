let createObject = function(parent){
    var obj ={};
    // following is terrible for performance. Dont use it. 
    Object.setPrototypeOf(obj,parent);
    return obj;
}
let animal = {
    makeSound: function(){
        console.log("Animal making sound");
        console.log(this.sound);
    }
}

let cat = createObject (animal)//Object.create(animal);
cat.sound="meow";
cat.makeSound = function(){
    console.log("cat is making sound");
}
cat.makeSound();
cat.__proto__.makeSound.apply(cat);

