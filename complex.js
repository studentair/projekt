var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (complex) {
        var re = this.re + complex.re;
        var im = this.im + complex.im;
        return new Complex(re, im);
    };
    Complex.prototype.substract = function (complex) {
        var re = this.re - complex.re;
        var im = this.im - complex.im;
        return new Complex(re, im);
    };
    Complex.prototype.toString = function () {
        console.log("Re: ", this.re, ", Im: ", this.im);
    };
    return Complex;
}());
var obiekt = new Complex(3, 4);
var obiekt2 = new Complex(6, 7);
var wynik = obiekt.add(obiekt2);
wynik.toString();
