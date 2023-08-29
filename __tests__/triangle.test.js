import Triangle from './../src/index.js';

describe('Triangle', () => {
  let reusableTriangle;

  beforeEach(() => {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  test('will show proper import of function', () => {
    expect(reusableTriangle.s1).toEqual(5);
    expect(reusableTriangle.s2).toEqual(5);
    expect(reusableTriangle.s3).toEqual(5);
  });

  test('will define what is not a triangle', () => {
    const ourTriangle = new Triangle(5,5,5);
    expect(ourTriangle.checkShape()).toEqual(console.log("is a triangle"));
  });

  test('will define what equilateral triangle', () => {
    expect(reusableTriangle.checkShape()).toEqual('Equilateral triangle');
  });

});