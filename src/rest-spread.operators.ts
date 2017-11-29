//#region Stub

const original = {
    name: "October",
    value: "Module"
}

const foo = {
    foo: 'foo'
}

const bar = {
    bar: 'bar'
}

const baz = {
    baz: 'baz'
}

//#endregion

//#region Swallow copy

let copy = { ...original };

//#endregion

//#region Merge

let merged = { ...foo, ...bar, ...baz }

//#endregion

//#region Override

let obj = { x: 1, y: "key" };
let extended = { ...obj, z: 3, y: 4 };

//#endregion

//#region Extract

let extend = {x: 1, y: 2, z: 1};
let {z, ...part} = extend;
console.log(part);

//#endregion