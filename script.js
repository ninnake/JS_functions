//1
function addNumbers(a, b) {
  return a + b;
}
const addNumbersExpr = function (a, b) {
  return a + b;
};
//2
const addNumbersArrow = (a, b) => {
  return a + b;
};
//3
function introduce(firstName, profession) {
  console.log("Hello, my name is " + firstName + " and i am a " + profession);
}
introduce("Nino", "student");
//4
const displayCarDetails = ({ brand, model, year }) => {
  console.log(`brand:${brand},` + ` model:${model},` + ` Year:${year}`);
};
displayCarDetails({
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
});
//5
function calculateDiscount(price, discountPercentage) {
  return price - (price * discountPercentage) / 100;
}
const finalPrice = calculateDiscount(200, 15);
console.log(finalPrice);
//6
sayGoodbye();
function sayGoodbye() {
  return console.log("Goodbye!");
}
//7
let secretCode = "XYZ123";
function testScope() {
  let localPin = "9999";
  console.log(secretCode);
  console.log(localPin);
}
testScope();
console.log(secretCode);
//console.log(localPin); //Uncaught ReferenceError: localPin is not defined at script.js:46:13
//8
let playerScore = 10;
function updateScore() {
  let playerScore = 50;
  console.log(playerScore);
}
updateScore();
console.log(playerScore);
//9
function alertUser() {
  console.log("Action completed!");
}
function executeCallback(callbackFunc) {
  callbackFunc();
}
executeCallback(alertUser);
//10
function timeIsUp() {
  console.log("Time is up!");
}
setTimeout(timeIsUp, 3000);
