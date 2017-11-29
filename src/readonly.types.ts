let numbers: Array<number> = [1, 2, 3, 4, 5];
let readonly_numbers: ReadonlyArray<number> = [6, 7, 8, 9];


let content: [string, number][] = [
    ['key', 0],
    ['key1', 1]
]
let map: Map<string, number> = new Map<string, number>(content);
let readonly_map: ReadonlyMap<string, number> = new Map<string, number>();

// readonly_numbers[1] = 2; // error!

map.set('key', -1)
const key = readonly_map.get('key');

// readonly_map.set('key', -1); // error!
