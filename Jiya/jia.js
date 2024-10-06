// Constructor function
function Person(name, age) {
    this.name = name; // Property
    this.age = age;   // Property
}

// Method to display person's info
Person.prototype.getInfo = function () {
    return `${this.name} is ${this.age} years old.`;
};

// Method to celebrate birthday
Person.prototype.celebrateBirthday = function () {
    this.age += 1; // Increase age by 1
    console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
};

// Create a new instance of Person
const person1 = new Person('Alice', 30);

// Using the methods
console.log(person1.getInfo());
person1.celebrateBirthday();
console.log(person1.getInfo());



