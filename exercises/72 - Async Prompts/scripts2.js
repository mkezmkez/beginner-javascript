function Person(name) {
  this.name = name;
  this.sayHello = function() {
    console.log(`Hello ${this.name}`);
  };
}

function MathPerson(name) {
  Person.call(this, name);
  this.doMath = function() {
    console.log(1 + 2);
  };
}

MathPerson.prototype.doComplicatedMath = function(num1, num2) {
  console.log(num1 ** num2);
};

const sarah = new Person("sarah");
console.log(sarah.name);
sarah.sayHello();
console.log(sarah);

const abi = new MathPerson("abi");

console.log(abi);

MathPerson.doComplicatedMath(3, 5);
