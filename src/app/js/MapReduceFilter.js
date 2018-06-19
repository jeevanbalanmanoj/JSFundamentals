(function () {
    "use strict";

    let persons = [
        {
            name: "Alice", age: 27
        }, {
            name: "Bob", age: 70
        },
        {
            name: "Clementine", age: 27
        }]
    var oldPersons = persons.filter((person) => {
        return person.age > 60;
    })
    oldPersons.forEach(person => {
        console.log(person)

    });
    persons.map((person) =>
        person.name).forEach(person => {
            console.log(person)

        });

    console.log(
        persons.map((person) =>
            person.name).join(", "));
    let ages = [10, 20];

    let totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    console.log(totalAge)


})();