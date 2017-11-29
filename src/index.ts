class Triangle {
    a: number;
    b: number;
    c: number;
}

class getSquare extends Triangle {
    square() {
        return this.a * this.b / 2;
    }
}

class getPerimeter extends Triangle {
    perimeter() {
        return this.a + this.b + this.c;
    }
}

// class TriangleHelper implements getSquare, getPerimeter {

// }





