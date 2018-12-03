class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }

    add(complex: Complex) {
        let re = this.re + complex.re;
        let im = this.im + complex.im;
        return new Complex(re, im)
    }

    substract(complex: Complex) {
        let re = this.re - complex.re;
        let im = this.im - complex.im;
        return new Complex(re, im)
    }

    toString() {
        console.log("Re: ", this.re, ", Im: ", this.im)
    }
}

let obiekt: Complex = new Complex(3, 4);
let obiekt2: Complex = new Complex(6, 7);
let wynik = obiekt.add(obiekt2);
wynik.toString();