const formatDate = require('./formatDate')
const getRandomInt = require('./getRandomInt')

module.exports = (str) => {
    return str.split("").map((char) => parseInt(char));
  }