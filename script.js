let singleton = (function () {
  //private singleton value which gets initialized only once
  let config;

  function initializeConfiguration(values) {
    this.randomNumber = Math.random();
    values = values || {};
    this.number = values.number || 5;
    this.size = values.size || 10;
  }
  //export the centralized method for retrieving the singleton values
  return {
    getConfig: function (values) {
      //initialize the singleton value only once
      if (config === undefined) {
        config = new initializeConfiguration(values);
      }

      return config;
    },
  };
})();

let configObject = singleton.getConfig({ size: 8 });

let configObject1 = singleton.getConfig({ number: 9 });
