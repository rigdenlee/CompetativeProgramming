// Construct a class called ComplexNumber which stores two properties
// real - The real part
// imaginary - The imaginary part

// The name of the properties should be strictly real and imaginary
// Implement the following functionalities inside this class : -
// add(ComplexNumber) -> Returns an object of ComplexNumber having sum of the two complex numbers.
// subtract(ComplexNumber) -> Returns an object of ComplexNumber having difference of the two complex numbers.
// multiply(ComplexNumber) -> Returns an object of ComplexNumber having multiplication of the two complex numbers.
// divide(ComplexNumber) -> Returns an object of ComplexNumber having division of the two complex numbers.


class ComplexNumber {

  // Define constructor here
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(x) {
    return new ComplexNumber(
      this.real + x.real,
      this.imaginary + x.imaginary
    );
  }

  subtract(x) {
    return new ComplexNumber(
      this.real - x.real,
      this.imaginary - x.imaginary
    );
  }

  multiply(x) {
    return new ComplexNumber(
      this.real * x.real - this.imaginary * x.imaginary,
      this.real * x.imaginary + this.imaginary * x.real
    );

  }

  divide(x) {
    const denominator =
      x.real * x.real + x.imaginary * x.imaginary;
    return new ComplexNumber(
      (this.real * x.real + this.imaginary * x.imaginary) / denominator,
      (this.imaginary * x.real - this.real * x.imaginary) / denominator
    );
  }

}

/*
    let a = new ComplexNumber(10, 5)
  let b = new ComplexNumber(2, 3)
  let c1 = a.add(b) 
  let c2 = a.subtract(b)
  let c3 = a.multiply(b)
  let c4 = a.divide(b)

*/