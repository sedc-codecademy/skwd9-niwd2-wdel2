/*
IMPORTANT! REGARDING INSTALLING AND COMPILING TYPESCRIPT
1. Install NodeJS. (When prompted don't install additional tools such as Chocolatey.)
2. Install GitBash. This is semi-optional. It will make your life extremely easier. When prompted, make it so you can start git bash anywhere.
3. Install typescript globally. (npm install typescript -g)
4. Init a typescript project. This will create your typescript file. (tsc --init)
5. To compile multiple files at the same time, and also not bother with writing the name of the file every time you compile, 
  add the name of the files in the files property of tsconfig.json (Check out my tsconfig.json in this example. Line 100 in there.)
  After this you can just use tsc and it will compile all files.
*/

// Basic Types
/* 
There are 4 base types in TS.
- number
- string
- boolean
- any (This is also the default type. Simply means that the variable doesn't have a specific type)
*/

let id: number = 1;
let username: string = "John";
let registered: boolean = true;
let myVar: any; // Avoid this.

// Arrays
/* 
Arrays in Typescript can also be given types to work with. This prevents us from adding elements of different types within the array,
giving us type safety.
*/
let lotteryNumbers: number[] = [1, 2, 3, 4];
// lotteryNumbers.push('test'); <- this won't work
lotteryNumbers.push(5);

// Tuples
/*
A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
*/
let personTuple: [number, string, boolean] = [1, "Jack", true];
let employees: [number, string][] = [
  [1, "Ivan"],
  [2, "George"],
  [3, "Dejan"],
];

// Union
// Sometimes, it's possible for a variable to come in different types. TypeScript unions allows us to use more than one data type for a variable or a function parameter.
let unionId: boolean | number = true;

// Enum
/*
Enums allow a developer to define a set of named constants. 
Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
*/
enum Actions {
  FORWARD = "W", // 0
  BACKWARD = "S", // 1
  LEFT = "A", // 2
  RIGHT = "D", // 3
}
// By default, the values here are 0, 1, 2, 3 etc. But you can set them in the enum.
console.log(Actions.FORWARD);
console.log(Actions.LEFT);

// Objects
/*
In JavaScript, the fundamental way that we group and pass around data is through objects. 
In TypeScript, we represent those through object types.
Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.
*/
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
  // joined: false, // <- Not gonna work.
};

const user2: User = {
  id: 2,
  name: "Brad",
};

// Type Assertion
/*
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. 
Usually, this will happen when you know the type of some entity could be more specific than its current type.
Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” 
A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. 
It has no runtime impact and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.
*/
let customerId: any = 1;
let cid = <number>customerId;
let custId = customerId as number;

// Functions
/* 
TypeScript can usually infer the intended type arguments in a generic call, but not always. Hence, it is useful for us to explicitly
specify the argument types within the function definition.
Functions in JavaScript often take a variable number of arguments. 
We can model this in TypeScript by marking the parameter as optional with ?
It is also a good practice to always specify the return type of the value that the function will produce.
*/
function addNum(firstNum: number, secondNum: number = 0): string {
  return `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
}

function logger(message: string | number): void {
  console.log(message);
}
addNum(2);

// Interface
/*
It’s pretty common to have types that might be more specific versions of other types. 
This is where interfaces come in play. 
Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow.
Classes that implement an interface must follow the structure provided by their interface. 
The TypeScript compiler does not convert interface to JavaScript.
*/
interface Message {
  id: number;
  text: string;
}

const quickMessage: Message = {
  id: 1,
  text: "Lorem ipsum!",
};

// Function Interfaces
/*
Interfaces can also be applied to functions. 
Interfaces ensure that all callers of functions that implement the interface supply the required arguments,
and also return the required value type.
*/

interface MathFunction {
  (x: number, y: number): number;
}

const addTwoNumbers: MathFunction = (
  firstNum: number,
  secondNum: number
): number => firstNum + secondNum;

const multTwoNumbers: MathFunction = (first: number, second: number): number =>
  first * second;

interface RegisterCredentials {
  email: string;
  password: string;
  registrationDate?: Date; // ? <- This means that the parameter is optional.
  readonly status: string;
}

// Interface Example
function registerWithEmailAndPassword(creds: RegisterCredentials) {
  const { email, password } = creds; // Objects can be destructured easier with this.
}

// Classes
/*
Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, 
but this may feel a bit awkward to programmers more comfortable with an object-oriented approach, 
where classes inherit functionality and objects are built from these classes.
*/

/* ACCESS MODIFIERS */
/*
In our examples, we’ve been able to freely access the members that we declared throughout our programs. 
If you’re familiar with classes in other languages, you may have noticed in the above examples we haven’t had to use the word public to accomplish this; for instance, 
C# requires that each member be explicitly labeled public to be visible. In TypeScript, each member is public by default.
You may still mark a member public explicitly.
- Public, means that the parameter can be accessed from anywhere
- Protected, means that the parameter can be accessed from the class, or the classes extend from that class
- Private, means that the parameter can only be accessed within the class
There are two ways of accessing private fields/properties of a class.
1. You can either create methods that specifically return or set the value. Example: getPersonId()
2. Rely on Typescripts getter/setter syntax. Example get id(): number {return this._id};
*/


class Person {
  private _id: number = 1;
  name: string;
  status: boolean;
  constructor(name: string, status: boolean) {
    this.name = name;
    this.status = status;
  }
  getPersonId() {
    return this._id;
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
}

const student: Person = new Person("John", false);
student.id = 5;

interface GreetingsInterface {
  greetings: string[];
}

/*
Classes can implement interfaces. They can implement as much interfaces as you want.
Implementing an interface means that the class signs a contract that it will implement the methods
and properties that were defined in the interface.
*/

class Human implements GreetingsInterface {
  id: number;
  name: string;
  greetings: string[];

  constructor(id: number, name: string, greetings: string[]) {
    this.id = id;
    this.name = name;
    this.greetings = greetings;
  }
}

interface onInit {
  tsOnInit(): number;
}

interface onDestroy {
  tsOnDestroy(): void;
}

/* 
Multiple implementations of different interfaces.
*/
class HeaderComponent implements onInit, onDestroy {
  tsOnInit() {
    return 1;
  }

  tsOnDestroy() {}
}

interface Position {
  posX: number;
  posY: number;
  posZ: number;
}

class Actor {
  id: number;
  name: string;
  status: boolean;

  constructor(id: number, name: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}

/*
Classes can also extend other classes. A feature of object oriented programming called inheritance.
This example shows the most basic inheritance feature: classes inherit properties and methods from base classes.
 Derived classes are often called subclasses or children, and base classes are often called superclasses or parents.
*/

/*
Each derived class that contains a constructor function must call super() which will execute the constructor of the base class. 
What’s more, before we ever access a property on this in a constructor body, we have to call super(). This is an important rule that TypeScript will enforce.
*/

class Entity extends Actor implements onInit {
  // When I'm extending Actor, I'm telling Entity that I'm giving it the properties that Actor has.
  private _position: Position = { posX: 0, posY: 0, posZ: 0 };
  constructor(id: number, name: string, status: boolean) {
    super(id, name, status);
  }
  get position(): Position {
    return this._position;
  }

  tsOnInit() {
    console.log("why is this not working??");
    return 1;
  }
}

// --------- Inheritance Example ------------ //

class Parent {
  house: boolean;
  lastName: string;

  constructor(house: boolean, lastName: string) {
    this.house = house;
    this.lastName = lastName;
  }

  buyCar(): boolean {
    return false;
  }
}

interface Job {
  getAJob(): boolean;
}

class Child extends Parent implements Job {
  name: string;
  constructor(name: string, house: boolean, lastName: string) {
    super(house, lastName);
    this.name = name;
    // this.house = house; <- This wont work.
    // this.lastName = lastName; <- This wont work. Because these properties are inherited from the parent. You MUST call super.
    // Super calls the parents constructor.
  }

  getAJob() {
    return true;
  }
}

const kid: Child = new Child("Kid", true, "Kiddo");
kid.buyCar();