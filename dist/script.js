"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//enums
var DiscFlags;
(function (DiscFlags) {
    DiscFlags[DiscFlags["None"] = 0] = "None";
    DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
    DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
    DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
    DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
})(DiscFlags || (DiscFlags = {}));
// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;
var hasD = (personality & DiscFlags.Drive);
let fname = "Hello";
let biathlete;
// The array is typed using the Monument interface 
const monuments = [];
// Each item added to the array is checked for type compatibility 
monuments.push({
    name: 'Statue of Liberty',
    heightInMeters: 46
});
monuments.push({
    name: 'Peter the Great',
    heightInMeters: 96
});
monuments.push({
    name: 'Angel of the North',
    heightInMeters: 20
});
function compareMonumentHeights(a, b) {
    if (a.heightInMeters > b.heightInMeters) {
        return -1;
    }
    if (a.heightInMeters < b.heightInMeters) {
        return 1;
    }
    return 0;
}
// The array.sort method expects a comparer that accepts two Monuments 
const monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);
// Get the first element from the array, which is the tallest 
const tallestMonument = monumentsOrderedByHeight[0];
// Peter the Great 
console.log(tallestMonument.name);
//////////////////////////////////////////////////////////////////////////////////////////////
// Tuple Type
let poem;
poem = [2, true, 'eqda'];
let dictionary = {};
dictionary['octopus vulgaris'] = { hasInk: true, arms: 8, tentacles: 0 };
dictionary['loligo vulgaris'] = { hasInk: true, arms: 8, tentacles: 2 };
console.log(dictionary);
dictionary[0] = { hasInk: true, arms: 2, tentacles: 9 };
console.log(dictionary);
/*


*/
// function getProperty() : House | Mansion  {
//     // ...
//     return
// }
// const property = getProperty();
// // OK as the property is on both House and Mansion 
// const bedroomCount = property.bedrooms;
// // Errors: Property 'butlers' does not exist on type 'House | Mansion' 
// const butlerCount = (<Mansion>property).butlers;
///////////////////////////////////////////////////////////////////////////////////////////////////
// Forced Type Assertion
const firstname = 'Avenue Road';
// Works
const workingBedroomCount = firstname;
///////////////////////////////////////////////////////////////////////////////////////////////////
// Type Guards
function typeGuardExample(stringNumber) {
    // Error: Property does not exist
    // const a = stringNumber.length;
    // const b = stringNumber.toFixed();
    // Type guard
    if (typeof stringNumber === 'string') {
        // OK
        return stringNumber.length;
    }
    else {
        // OK
        return stringNumber.toFixed();
    }
}
function isSpeedControllable(treadmill) {
    if (treadmill.increaseSpeed
        && treadmill.decreaseSpeed && treadmill.stop) {
        return true;
    }
    return false;
}
function customTypeGuardExample(treadmill) {
    // Error: Property does not exist
    // const a = treadmill.increaseSpeed();
    // const b = treadmill.lift();
    // Type guard
    if (isSpeedControllable(treadmill)) {
        // OK
        treadmill.increaseSpeed();
    }
    else {
        // OK
        treadmill.lift();
    }
}
function volume(prism) {
    // Type Guard
    switch (prism.kind) {
        case 'cube':
            return prism.size * prism.size * prism.size;
        case 'cuboid':
            return prism.width * prism.depth * prism.height;
        default:
            assertNever(prism);
    }
}
function assertNever(arg) {
    throw new Error("Possible new tagged type: " + arg);
}
let myCube = {
    kind: 'cube',
    size: 5
};
let myCubeVol = volume(myCube);
///////////////////////////////////////////////////////////////////////////////////////////////////
// Discriminated union
// '51': string 
const str = 5 + '1';
console.log(!false);
///////////////////////////////////////////////////////////////////////////////////////////////////
// Spread Operator
function add(a, b, c) {
    return a + b + c;
}
const hexagons = [1, 6, 15];
console.log(add.apply(void 0, hexagons));
///////////////////////////////////////////////////////////////////////////////////////////////////
function getAverage(a, b, c) {
    let total = a;
    let count = 1;
    total += b;
    count++;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    const average = total / count;
    return 'The average is ' + average;
}
// 'The average is 5'
const result = getAverage(4, 6);
///////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
function concatenate(items, separator = ',', beginAt = 0, endAt = items.length) {
    let result = '';
    for (let i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += separator;
        }
    }
    return result;
}
const items = ['A', 'B', 'C'];
// 'A,B,C'
const myresult = concatenate(items);
// 'B-C'
const partialResult = concatenate(items, '-', 1);
///////////////////////////////////////////////////////////////////////////////////////////////////
function getAverage_(...a) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    const average = total / count;
    return 'The average is ' + average;
}
// 'The average is 6'
const result_ = getAverage_(2, 4, 6, 8, 10);
///////////////////////////////////////////////////////////////////////////////////////////////////
const add_ = (a, b) => {
    return a + b;
};
console.log(add_(100, 100));
///////////////////////////////////////////////////////////////////////////////////////////////////
const makeName = (f, l) => ({ first: f, last: l });
///////////////////////////////////////////////////////////////////////////////////////////////////
// Function Currying
const multiply = (a) => (b) => a * b;
// Pass both arguments in sequence: 30 
const numA = multiply(5)(6);
class WarehouseLocation {
    constructor(aisle, slot) {
        this.aisle = aisle;
        this.slot = slot;
    }
}
const figure = { asin: 'B001TEQ2PI', description: 'Figure' };
const warehouseSlot = new WarehouseLocation(15, 'A6');
class Song {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    play() {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    }
    static Comparer(a, b) {
        if (a.title === b.title) {
            return 0;
        }
        return a.title > b.title ? 1 : -1;
    }
}
class Playlist {
    constructor(songs) {
        this.songs = songs;
        this.play = () => {
            var song = this.songs.pop();
            song.play();
        };
        this.sort = () => {
            this.songs.sort(Song.Comparer);
        };
    }
}
class RepeatingPlaylist extends Playlist {
    constructor(songs) {
        super(songs);
        this.songIndex = 0;
        this.play = () => {
            this.songs[this.songIndex].play;
            this.songIndex++;
            if (this.songIndex >= this.songs.length) {
                this.songIndex = 0;
            }
        };
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Generics (Functions)
function reverse(list) {
    const reversedList = [];
    for (let i = (list.length - 1); i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
const letters = ['a', 'b', 'c', 'd'];
// d, c, b, a
const reversedLetters = reverse(letters);
const numbers = [1, 2, 3, 4];
// 4, 3, 2, 1
const reversedNumbers = reverse(numbers);
///////////////////////////////////////////////////////////////////////////////////////////////////
// Generics (Interfaces)
class CustomerId {
    constructor(customerIdValue) {
        this.customerIdValue = customerIdValue;
    }
    get value() {
        return this.customerIdValue;
    }
}
class Customer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class CustomerRepository {
    constructor(customers) {
        this.customers = customers;
    }
    getById(id) {
        return this.customers[id.value];
    }
    persist(customer) {
        this.customers[customer.id.value] = customer;
        return customer.id;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Generics (Classes)
class DomainId {
    constructor(id) {
        this.id = id;
    }
    get value() {
        return this.id;
    }
}
class OrderId extends DomainId {
    constructor(orderIdValue) {
        super(orderIdValue);
    }
}
class AccountId extends DomainId {
    constructor(accountIdValue) {
        super(accountIdValue);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Test
class Kitchen {
    constructor(knife, stool) {
        this.knife = knife;
        this.stool = stool;
    }
    get Items() {
        return this.knife + " and " + this.stool;
    }
}
let kitchen = new Kitchen("Knife", "Stool");
console.log(kitchen.Items);
///////////////////////////////////////////////////////////////////////////////////////////////////
// Namespaces
var First;
(function (First) {
    class Example {
        log() {
            console.log('Logging from First.Example.log()');
        }
    }
    First.Example = Example;
})(First || (First = {}));
var Second;
(function (Second) {
    class Example {
        log() {
            console.log('Logging from Second.Example.log()');
        }
    }
    Second.Example = Example;
})(Second || (Second = {}));
const first = new First.Example();
// Logging from First.Example.log() first.log();
const second = new Second.Example(); // Logging from Second.Example.log()
second.log();
///////////////////////////////////////////////////////////////////////////////////////////////////
// Nested Namespaces
var FirstLevel;
(function (FirstLevel) {
    let SecondLevel;
    (function (SecondLevel) {
        class Example {
        }
        SecondLevel.Example = Example;
    })(SecondLevel = FirstLevel.SecondLevel || (FirstLevel.SecondLevel = {}));
})(FirstLevel || (FirstLevel = {}));
(function (FirstLevel) {
    var SecondLevel;
    (function (SecondLevel) {
        var ThirdLevel;
        (function (ThirdLevel) {
            class Example {
            }
            ThirdLevel.Example = Example;
        })(ThirdLevel = SecondLevel.ThirdLevel || (SecondLevel.ThirdLevel = {}));
    })(SecondLevel = FirstLevel.SecondLevel || (FirstLevel.SecondLevel = {}));
})(FirstLevel || (FirstLevel = {}));
const nested = new FirstLevel.SecondLevel.Example();
const dotted = new FirstLevel.SecondLevel.ThirdLevel.Example();
///////////////////////////////////////////////////////////////////////////////////////////////////
// Public and Private Members
var Shipping;
(function (Shipping) {
    // Available as Shipping.Ferry 
    class Ferry {
        constructor(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
    }
    Shipping.Ferry = Ferry;
    // Only available inside of the Shipping module
    const defaultDisplacement = 4000;
    class PrivateShip {
        constructor(name, port, displacement = defaultDisplacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
    }
})(Shipping || (Shipping = {}));
const ferry = new Shipping.Ferry('Assurance', 'London', 3220);
///////////////////////////////////////////////////////////////////////////////////////////////////
// Import
var Docking;
(function (Docking) {
    class Dock {
        constructor() {
            this.dockedShips = [];
        }
        arrival(ship) {
            this.dockedShips.push(ship);
        }
    }
    Docking.Dock = Dock;
})(Docking || (Docking = {}));
const dock = new Docking.Dock();
///////////////////////////////////////////////////////////////////////////////////////////////////
// Decorators
let log = (target, key, descriptor) => {
    console.log(key);
};
class Calculator {
    square(n) {
        return n * n;
    }
}
__decorate([
    log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Calculator.prototype, "square", null);
const calc = new Calculator();
console.log(calc.square(9));
