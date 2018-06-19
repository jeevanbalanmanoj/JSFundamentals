class Mammal{
    constructor(sound){
        this.sound= sound;
    }
    talk(){
        return this.sound;
    }
}

let cat = new Mammal("meow");
cat