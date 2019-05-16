////////////////////////////////////////////////////////////////
// Just some helper code to generate a list of 100 numbers:

  const random = (min, max) => {
    var num = Math.floor(Math.random() * (max + 1 - min) + min)
    return num
}

const makeNumberList = (howMany) => {
   const numbers = []
    for(let i = 0; i < howMany; i++) {
        numbers.push(random(0, 100))
    }
    return numbers
};
const numbers = makeNumberList(100)
// End helper code
////////////////////////////////////////////////////////////////



// Using a for / of loop, iterate through the list of
// numbers and add them all together. Then, write the
// final result to the document.
// Replace the code below with your code:

/* let sum += makeNumberList(100);
  for (numbers of makeNumberList) {
    console.log(sum);

}*/


let sum = 0;
for(let i = 0; i < numbers[i]; i++){
  sum += numbers[i]
}

document.write('The sum is: ' + sum);

/* console.log(numbers)
let sum = 0
sum += numbers[0];
sum += numbers[1];
sum += numbers[2];
//...
sum += numbers[99]; */
