class Base {
    x: number;
    constructor() {
        return {
            x: 4,
        };
    }
}

class Derived extends Base {
    constructor() {
        super();
        this.x = 6;
    }
}