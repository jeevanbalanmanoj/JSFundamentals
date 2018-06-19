let dog ={
    sound : 'woof',
    talk : function(){
    console.log(this.sound);
    }

}

dog.talk();
let talkFunction = dog.talk;
sound="bow bow";
talkFunction();
let boundFunction = talkFunction.bind(dog);
boundFunction();