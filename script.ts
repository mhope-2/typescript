///////////////////////////////////////////////////////////////////////////////////////////////////
//enums
enum DiscFlags { 
    None = 0,
    Drive = 1,
    Influence = 2, 
    Steadiness = 4, 
    Conscientiousness = 8
    }
    

// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

var hasD= (personality & DiscFlags.Drive) 


//union type
type StringOrError = string | Error;

let fname : StringOrError = "Hello"


interface Skier {
    slide(): void;
}
interface Shooter {
    shoot(): void;
}
type Biathelete = Skier & Shooter;

let biathlete : Biathelete

//////////////////////////////////////////////////////////////////////////////////////////////

//Monument Interface
interface Monument {
    name: string;
    heightInMeters: number;
}

// The array is typed using the Monument interface 
const monuments: Monument[] = [];

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

function compareMonumentHeights(a: Monument, b: Monument) { 
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
let poem: [number , boolean , string];

poem = [2,true,'eqda']

///////////////////////////////////////////////////////////////////////////////////////////////////
// Dictionary Type

interface Cephalopod {
    hasInk: boolean;
    arms: number;
    tentacles: number;
}


interface CephalopodDictionary {
    [index: string]: Cephalopod;
}


let dictionary: CephalopodDictionary = {};

dictionary['octopus vulgaris'] = { hasInk: true, arms: 8, tentacles: 0 }; 
dictionary['loligo vulgaris'] = { hasInk: true, arms: 8, tentacles: 2 };


console.log(dictionary)

dictionary[0] = { hasInk: true, arms: 2, tentacles: 9 };


console.log(dictionary)

///////////////////////////////////////////////////////////////////////////////////////////////////
// Type Assertion

interface House {
    bedrooms: number;
    bathrooms: number;
}

interface Mansion {
    bedrooms: number;
    bathrooms: number;
    butlers: number;
}

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

const firstname: string = 'Avenue Road';

// Works
const workingBedroomCount: number = <number><any>firstname;

///////////////////////////////////////////////////////////////////////////////////////////////////
// Type Guards

function typeGuardExample(stringNumber: string | number) { 
    // Error: Property does not exist
    // const a = stringNumber.length;
    // const b = stringNumber.toFixed();
    
    // Type guard
    if (typeof stringNumber === 'string') {
        // OK
        return stringNumber.length; 
    } else {
        // OK
        return stringNumber.toFixed(); 
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Custom Type Guards


interface SpeedControllable {
    increaseSpeed(): void;
    decreaseSpeed(): void;
    stop(): void;
}

interface InclineControllable {
    lift(): void;
    drop(): void;
}

function isSpeedControllable(treadmill: SpeedControllable | any) : treadmill is SpeedControllable {
if (treadmill.increaseSpeed
&& treadmill.decreaseSpeed && treadmill.stop) { 
    return true;
}
    return false;
}
function customTypeGuardExample(treadmill: SpeedControllable | InclineControllable) { 
    // Error: Property does not exist
    // const a = treadmill.increaseSpeed();
    // const b = treadmill.lift();

// Type guard
if (isSpeedControllable(treadmill)) {
    // OK
    treadmill.increaseSpeed(); 
} else {
    // OK
    treadmill.lift(); 
}
    }

///////////////////////////////////////////////////////////////////////////////////////////////////
// Discriminated union

interface Cube {
    kind: 'cube', //Discriminant
    size: number
}

interface Cuboid {
    kind: 'cuboid'; // Discriminant 
    width: number;
    depth: number;
    height: number;
}

// Union
type Prism = Cube | Cuboid;

function volume(prism: Prism): number {
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

function assertNever(arg: never): never {
    throw new Error("Possible new tagged type: " + arg);
    }

let myCube: Cube = {
    kind: 'cube',
    size : 5
}

let myCubeVol = volume(myCube);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Discriminated union

// '51': string 
const str = 5 + '1';

console.log(!false)

///////////////////////////////////////////////////////////////////////////////////////////////////
// Spread Operator

function add(a: number, b: number, c: number): number {
    return a + b + c;
}

const hexagons:number[] = [1, 6, 15]

console.log(add.apply(void 0, hexagons))

///////////////////////////////////////////////////////////////////////////////////////////////////

function getAverage(a: number, b: number, c?: number): string { 
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
function concatenate(items: string[], separator = ',', beginAt = 0, endAt = items.length) {
    let result = '';
    for (let i = beginAt; i < endAt; i++) { 
        result += items[i];
        if (i < (endAt - 1)) {
            result += separator; }
    }
        return result;
    }

const items = ['A', 'B', 'C'];

// 'A,B,C'
const myresult = concatenate(items);

// 'B-C'
const partialResult = concatenate(items, '-', 1);

///////////////////////////////////////////////////////////////////////////////////////////////////
function getAverage_(...a: number[]): string {
    let total = 0;
    let count = 0;
    for (let i = 0; i < a.length; i++){ 
        total += a[i];
        count++; 
}
    const average = total / count;
    return 'The average is ' + average; 
}
    // 'The average is 6'
    const result_ = getAverage_(2, 4, 6, 8, 10);


///////////////////////////////////////////////////////////////////////////////////////////////////

const add_ = (a:number, b:number):number =>{
    return a + b
}

console.log(add_(100,100))
///////////////////////////////////////////////////////////////////////////////////////////////////
const makeName = (f: string, l: string) => ({ first: f, last: l })


///////////////////////////////////////////////////////////////////////////////////////////////////

// Function Currying
const multiply = (a: number) => (b: number) => a * b;
// Pass both arguments in sequence: 30 
const numA = multiply(5)(6);


///////////////////////////////////////////////////////////////////////////////////////////////////
// Classes

// class Song{
//     private artist : String
//     private title: String

//     constructor(private theArtist:String, private theTitle:String){}

//     play() {
//         console.log('Playing ' + this.theTitle + ' by ' + this.theArtist);
//     }

// }


// let mySong = new Song('Jay', 'Make My Day')

// mySong.play()

///////////////////////////////////////////////////////////////////////////////////////////////////
// classes

// class Playlist {
//     private songs: Song[] = [];
//     static readonly maxSongCount = 30;

//     constructor(public name:String){}

//     addSong(song:Song) {
//         if(this.songs.length >= Playlist.maxSongCount){
//             throw new Error('Playlist is full')
//         }
//         this.songs.push(song)
//     }
// }


// Creating a new instance
// const playlist = new Playlist('My Playlist');

// Accessing a public instance property 
// const playlistName = playlist.name;

// Calling a public instance method
// playlist.addSong(new Song('Therapy?', 'Crooked Timber'));

// Accessing a public static property 
// const maxSongs = Playlist.maxSongCount;

// Error: Cannot assign to a readonly property 
// Playlist.maxSongCount = 20;


///////////////////////////////////////////////////////////////////////////////////////////////////
// Getters and Setters

interface StockItem {
    description: string;
    asin: string;
}

class WarehouseLocation {
    private _stockItem: StockItem;

    constructor(public aisle: number, public slot: string) {}

    // get stockItem() {
    //     return this._stockItem;
    // }
    // set stockItem(item: StockItem) { 
    //     this._stockItem = item;
    //     }
    }

const figure = { asin: 'B001TEQ2PI', description: 'Figure' };

const warehouseSlot = new WarehouseLocation(15, 'A6');

// warehouseSlot.stockItem = figure;

///////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance

interface Audio {
    play(): any;
}

class Song implements Audio {
    constructor(private artist: string, private title: string) {}
    
    play(): void {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    }
    
    static Comparer(a: Song, b: Song) { 
        if (a.title === b.title) {
            return 0; 
        }
        return a.title > b.title ? 1 : -1; 
        }
    }

class Playlist {
    constructor(public songs: Audio[]) {}
    
    play = () => {
        var song = this.songs.pop(); 
        song.play();
    }
    sort = () => { 
        this.songs.sort(Song.Comparer);
        } 
    }

class RepeatingPlaylist extends Playlist {
    private songIndex = 0;
        constructor(songs: Song[]) {
            super(songs);
    }
    
    play = () =>{ 
        this.songs[this.songIndex].play;
        this.songIndex++;
    if (this.songIndex >= this.songs.length) {
            this.songIndex = 0;
        } 
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Generics (Functions)

function reverse<T>(list: T[]) : T[] {
    const reversedList: T[] = [];
    for (let i = (list.length - 1); i >= 0; i--) { 
        reversedList.push(list[i]);
    }
        return reversedList;
    }

const letters = ['a', 'b', 'c', 'd'];
// d, c, b, a
const reversedLetters = reverse<string>(letters);

const numbers = [1, 2, 3, 4]; 
// 4, 3, 2, 1
const reversedNumbers = reverse<number>(numbers);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Generics (Interfaces)

class CustomerId {
    constructor(private customerIdValue: number) {}

    get value() {
        return this.customerIdValue;
        } 
    }

class Customer {
    constructor(public id: CustomerId, public name: string) {} 
    }

interface Repository<T, TId> {
    getById(id: TId): T
    persist(model: T): TId
}

class CustomerRepository implements Repository<Customer, CustomerId> { 
    constructor(private customers: Customer[]) {}

    getById(id: CustomerId) {
        return this.customers[id.value]
        }
    
    persist(customer: Customer) { 
        this.customers[customer.id.value] = customer
        return customer.id
        } 
    
    }
        
///////////////////////////////////////////////////////////////////////////////////////////////////
// Generics (Classes)

class DomainId<T> {
    constructor(private id: T) {}
        get value(): T { return this.id;
        } 
    }

class OrderId extends DomainId<number> {
    constructor(orderIdValue: number) {
        super(orderIdValue);
    }
}

class AccountId extends DomainId<string> {
    constructor(accountIdValue: string) {
        super(accountIdValue);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Type Constraints

interface HasName {
    name: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Test


class Kitchen {

    public constructor(private knife:String, private stool:String){}

    get Items(){
        return this.knife + " and " + this.stool
    }

}


let kitchen = new Kitchen("Knife","Stool")

console.log(kitchen.Items)
