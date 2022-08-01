function Person(name, age, isDeveloper) {
  this.name = name;
  this.age = age;
  this.isDeveloper = isDeveloper || false;
}

Person.prototype.writeCode = function () {
  console.log(
    this.isDeveloper
      ? "This person does write code"
      : "This person does not write code"
  );
};

let person1 = new Person("Aneta", 36, false);
let person2 = new Person("Mariusz", 31, true);

person1.writeCode();
person2.writeCode();
