const animal = {
    setName: function (newName) {
        this.name= newName;
    },
    sayName: function (name) {
        console.log("I'm ",this.name);
    }
}
const elephant = (proto) => {
    let age;
    let obj = Object.create(proto);
    obj.getAge =function () {
        return age;
    };
    obj.setAge =function (newAge) {
        age = newAge;
    };
    return obj;
}
let elephantOne = elephant(animal);
elephantOne.setAge(100);
elephantOne.setName("Animal");
elephantOne.sayName();
age = elephantOne.getAge()
console.log(age);

