function helper(this: void) {
    // make sure 'this' is unusable
}

class Handler {
    private id: number;

    handle(this: Handler, id: number) {
        this.id = id;        
    }

    log(this: Handler) {
        console.log(this.id);
    }

    exception(): never {
        throw new Error();
    }
}