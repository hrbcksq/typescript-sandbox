type Maybe<T> = T | void;

function isDefined<T>(x: Maybe<T>): x is T {
    return x !== undefined && x !== null;
}

function inUndefined<T>(x: Maybe<T>): x is void {
    return x === undefined || x === null;
}

function setDefault<T>(x: Maybe<T>, defaultValue: T): T {
    return isDefined(x) ? x : defaultValue;
}