//#region Partial
function update<T>(obj: T, patch: Partial<T>) {
    return Object.assign({}, obj, patch);
}
//#endregion

//#region Freeze
function freeze<T>(obj: T): Readonly<T> {
    return Object.freeze(obj);
}
const freezed = freeze({ name: 'August' });
//#endregion

//#region Pick
/**
 * From T pick a set of properties K
 * 
 * @template Type 
 * @template Key 
 * @param {Type} obj 
 * @param {...Key[]} keys 
 * @returns {Pick<Type, Key>} 
 */
declare function pick<Type, Key extends keyof Type>(obj: Type, ...keys: Key[]): Pick<Type, Key>

const dictionary = pick({ id: 1, name: 5, key: 3 }, "id", "name");
const id = dictionary.id;
//#endregion

//#region Map
declare function mapObject<K extends string, T, U>(obj: Record<K, T>, func: (x: T) => U): Record<K, U>

const names = { foo: 'foo', bar: 'bar', baz: 'baz' };
const le = mapObject(names, s => s.length);
//#endregion




