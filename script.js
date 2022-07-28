// Methods of create objects
let instance = {};
let instance1 = Object.create(Object.prototype);
let instance2 = new Object();

// dot notation
instance.key = "maniolo";
// square brackets notation
instance["key1"] = "manillo";

// supported since ES5
//setting a sigle porpert using Object.defineProperty
Object.defineProperty(instance, "key2", {
  value: "key is value",
  writable: true,
  enumerable: true,
  configurable: true,
});

//Setting multple properties using Object.defineProperties

Object.defineProperties(instance, {
  firstKey: {
    value: "first key value",
    writable: true,
  },
  secondKey: {
    value: "second key's value",
    writable: false,
  },
});

console.log(instance);
