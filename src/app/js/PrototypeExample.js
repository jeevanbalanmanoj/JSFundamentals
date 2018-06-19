(function () {

    const Person = {
        init: function (name) {
            this.name = name
        },
        getName: function () {
            return this.name
        }
    }
    person = Object.create(Person);
    person.init("Jeevan");
    console.log(person.getName());
})();