//#region Stub

interface Person {
    name: string,
    age: number,
    location: string
}

enum Color {
    Red, 
    Green, 
    Blue
}

//#endregion

//#region Keyof

type K1 = keyof Person;
type K2 = keyof Person[];
type K3 = keyof { [x: string]: Person };

//#endregion

//#region Typeof

const base = { type: 'base type' };
type I0 = typeof base;
type A1 = string[]["push"]; 

//#endregion

//#region Keyof + Typeof

type E0 = typeof Color;
type E1 = keyof typeof Color;

//#endregion

//#region Keyof + Extends

function getProperty<T, K extends keyof T>(obj: T, key:K) {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
    obj[key] = value;
}

let x = {foo: 10, bar: 'ten'};

let xfoo = getProperty(x, 'foo'); // number
let xbar = getProperty(x, 'bar'); // string

// setProperty(x, "foo", "string") // Error! string expected number

//#endregion

