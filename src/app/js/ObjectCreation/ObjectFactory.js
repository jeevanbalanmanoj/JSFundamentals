const elephant = () => {
    let age;
    return {
        getAge: function () {
            return age;
        },
        setAge: function (newAge) {
            age = newAge;
        }
    };
}
let elephantOne = elephant();
elephantOne.setAge(100);
age = elephantOne.getAge()
console.log(age);
