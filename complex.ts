class Complex {
    private re: number;
    private im: number;
    constructor(re: number, im: number){
        this.re = re;
        this.im = im;
    }

    add(Complex2:Complex) {
        let re = this.re + Complex2:re;
        let im = this.im + Complex2:im;
        return new Complex2(re, im);
    }

    substract(Complex3:Complex) {
        let re = this.re - Complex2:re;
        let im = this.im - Complex2:im;
        return new Complex2(re, im);
    }

    toString(Complex4:Complex) {

    }
}
