//Builder Pattern

class Adress {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone, address }) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", { age: 10 });
