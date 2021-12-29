// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {


    if (!error) return data;

    return undefined;
    
  });
 
};

// export the function
module.exports = breedDetailsFromFile;

