//IIFE to create a private variable , counter

let collection = (function () {
  //private members
  let objects = [];
  //public members
  return {
    addObject: function (object) {
      objects.push(object);
    },
    removeObject: function (object) {
      let index = objects.indexOf(object);
      if (index >= 0) {
        objects.splice(index, 1);
      }
    },
    getObjects: function () {
      return JSON.parse(JSON.stringify(objects));
    },
  };
})();

collection.addObject("Manio");
collection.addObject("Janik");
collection.addObject("Kamila");

console.log(collection.getObjects());

collection.removeObject("Janik");

console.log(collection.getObjects());
