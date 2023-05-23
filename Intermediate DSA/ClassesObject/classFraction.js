// Problem Description
// Construct a class Fraction which stores a fraction. It should contain the

// -Numerator
// -Denominator

// Assume denominator will never be 0.
// The class should support the following functionalities
// add(Fraction) -> Returns the sum of two fractions
// subtract(Fraction) -> Returns the difference of two fractions
// multiply(Fraction) -> Returns the product of two fractions
// The fraction returned needs to be in the simplest form. If the fraction is p/q then p and q must be co-prime.
// You may define any properties in the class as you see appropriate.

class Fraction {
  // Define constructor here
  constructor(n, d) {
    this.numerator = n;
    this.denominator = d;
  }

  Fraction(n, d) {
    this.numerator = n;
    this.denominator = d;
  }


  add(a) {
    // Complete the function
    let numer = (this.numerator * a.denominator) + (this.denominator * a.numerator);
    let denom = Math.abs(this.denominator * a.denominator);

    for (var i = Math.max(numer, denom); i > 1; i--) {
      if ((numer % i == 0) && (denom % i == 0)) {
        numer /= i;
        denom /= i;
      }
    }

    return new Fraction(numer, denom);
  }

  subtract(a) {
    // Complete the function
    let numer = Math.abs(this.numerator * a.denominator) - (this.denominator * a.numerator);
    let denom = Math.abs(this.denominator * a.denominator);

    for (var i = Math.max(numer, denom); i > 1; i--) {
      if ((numer % i == 0) && (denom % i == 0)) {
        numer /= i;
        denom /= i;
      }
    }

    return new Fraction(numer, denom);

  }

  multiply(a) {
    // Complete the function
    let numer = this.numerator * a.numerator;
    let denom = Math.abs(this.denominator * a.denominator);


    for (var i = Math.max(numer, denom); i > 1; i--) {
      if ((numer % i == 0) && (denom % i == 0)) {
        numer /= i;
        denom /= i;
      }
    }

    return new Fraction(numer, denom);
  }
};

/*
    let x = new Fraction(2, 3)  // 2/3
	let y = new Fraction(4, 5) // 4/5
    let z = x.add(y) // 22/15
    let z = x.subtract(y) // -2/15
    let z = x.multiply(y) // 8/15
*/