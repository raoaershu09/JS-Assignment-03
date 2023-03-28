// Question # 01 :
let age = 19;

let ageAsString = String(age);

console.log("your age is", age);

console.log("the type of age is :", typeof age);

console.log("the type of age As String is :", typeof ageAsString);

// Question #02 :

let number = 7;

if (number % 2 == 0) {
  alert(number + "this is even number");
} else {
  alert(number + "this is odd number");
}

// Question #03

let temprature = 72;

let celcius = ((temprature - 32) * 5) / 9;

console.log("temprature convert in to celcius is : " + celcius);

// Question #04

let name = "Rao Aershuman Adnan";

let age = 19;

if (age >= 18) {
  console.log(`Welcome ${name}, you are an adult`);
} else {
  console.log(`Sorry ${name}, you are not yet an adult`);
}

// Question #05

const isRaining = true;

if (isRaining) {
  console.log("bring an umbrella");
} else {
  console.log("bring the umbrella at home");
}
