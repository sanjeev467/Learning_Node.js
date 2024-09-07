// using node package manager(npm)
//steps to use below code
//1-> npm install give-me-a joke
//2-> require the module and store it in jokes variable now jokes will be an object

const jokes = require("give-me-a-joke");
const colors = require("colors");
// console.dir(jokes);
jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
