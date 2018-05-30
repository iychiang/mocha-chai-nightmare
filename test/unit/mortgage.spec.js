const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
  beforeEach(() => {
    mortgage = new Mortgage (1000, 10, 10, 10);
  });

  it('monthly payment should exist', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('monthly payment calc should exist', () => {
    expect(mortgage.monthlyPayment()).to.exist;
  });

  it('payment should be greater than 0', () => {
    expect(mortgage.monthlyPayment()).to.be.above(0);
  });

  it('payment should be 15', () => {
    expect(mortgage.monthlyPayment()).to.equal(15);
  });
});