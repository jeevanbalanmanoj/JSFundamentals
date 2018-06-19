let cat = function () {
    return {
        sound: "meow",
        // Each object has it's own copy of the following function which leads to memory wastage 
        makeSound: function () {
            console.log(this.sound);
        }
    }
}

let newCat = cat();
newCat.makeSound()