let animal = {
  eats: true,
  runs: false,
  walk() {
    this.isSleeping = false;
    console.log(` Mr. ${this.name} no is sleeping, is walking`);
  },
  sleep() {
    this.isSleeping = true;
    console.log(` Mr. ${this.name} is going to bed`);
  },
};

let rabbit = {
  __proto__: animal,
  jumps: true,
  name: "bad bunny",
};

let elephant = {
  __proto__: animal,
  jumps: false,
  name: "dumbo",
};

// this one gives us all the properties both own and inherited
for (let prop in rabbit) console.log(prop);

// this one gives us just the own properties and not inherited ones
console.log(Object.keys(elephant));

// filtering things
for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`);
  } else {
    console.log(`inherited: ${prop}`);
  }
}

// elephant.sleep();
// console.log(elephant.isSleeping);
// elephant.walk();
// console.log(elephant.isSleeping);

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

// rabbit.walk = function() {
//   console.log("Rabbit, bounce my lil one");
// };
// // Object.setPrototypeOf(rabbit, animal);
// // console.log(Object.getPrototypeOf(rabbit));

// // animal.sleeps();
// // rabbit.sleeps();
// // longEar.sleeps();

// animal.walk();
// longEar.walk();

// let user = {
//   name: "jhon",
//   surname: "smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };

("use strict");

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [];
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach);

// This one also has it, why? fix please.
console.log(lazy.stomach);
