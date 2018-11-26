var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (Complex2) {
        var re = this.re + Complex2, re;
        var im = this.im + Complex2, im;
        return new Complex2(re, im);
    };
    Complex.prototype.substract = function (Complex3) {
        var re = this.re - Complex2, re;
        var im = this.im - Complex2, im;
        return new Complex2(re, im);
    };
    Complex.prototype.toString = function (Complex4) {
    };
    return Complex;
}());
