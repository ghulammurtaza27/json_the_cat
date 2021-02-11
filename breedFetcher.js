const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      return callback("Breed not found");
    }
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };

