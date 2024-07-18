/* 2. ES6 Module
Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.*/

function circlArea(radius) {
  return Math.PI * (radius ** 2);
}

export { circlArea };
