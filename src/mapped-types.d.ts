
declare namespace Sandbox {
    /**
    * Make all properties in T optional
    */
    type Partial<T> = {
        [P in keyof T]?: T[P];
    };

    /**
     * Make all properties in T readonly
     */
    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    };

    /**
     * From T pick a set of properties K
     */
    type Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };

    /**
     * Construct a type with a set of properties K of type T
     */
    type Record<K extends string, T> = {
        [P in K]: T;
    };
}
