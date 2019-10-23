const fs = require('fs');
const arrayToTxtFile = require('array-to-txt-file');
const swears_1 = require('./inputs/swears_1.js');
const swears_2 = require('./inputs/swears_2.js');
const swears_3 = fs.readFileSync('./inputs/swears_3.txt').toString().split("\n");

let swears = [
	...swears_1,
	...swears_2,
	...swears_3
]

/* Make the array all lowercase */
swears = swears.map(e => e.toLowerCase());

/* Remove (exact) duplicate elements from the array */
var present = {};
swears = swears.filter((i) => {
	return present.hasOwnProperty(i) ? false : (present[i] = true);
});

/* Remove empty / falsy elements from the array */
swears = swears.filter((i) => {
  return i;
});

/* Sort the array alphabetically */
swears.sort();

/* Write the array to a file */
arrayToTxtFile(swears, './swears.txt', err => {
    if(err) {
      console.error(err)
      return
    }
    console.log('Successfully wrote to txt file.')
});
