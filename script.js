//we write entire object logic as private members and
//expose an annonymous object which maps members we wish to reveal
//to their corresponding public members

let namesCollection = (function () {
  //private members
  let objects = [];
  function addObject(object) {
    objects.push(object);
  }

  function removeObject(object) {
    const index = objects.indexOf(object);
    if (index >= 0) {
      objects.splice(index, 1);
    }
  }
  function getObjects() {
    return JSON.parse(JSON.stringify(objects));
  }

  return {
    addName: addObject,
    removeName: removeObject,
    getNames: getObjects,
  };
})();

namesCollection.addObject("Manio");
namesCollection.addObject("Janik");
namesCollection.addObject("Kamila");

console.log(namesCollection.getObjects());

namesCollection.removeObject("Janik");

console.log(namesCollection.getObjects());
