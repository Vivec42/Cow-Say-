const info = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `My name is ${info.name} and I'm from the ${info.campus} campus.`,
    e: "oO",
    T: "U ",
  })
);
