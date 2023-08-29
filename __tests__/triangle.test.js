import triangleDeterminer from './../src/index.js';

describe('triangleDeterminer', () => {

  test('will show proper import of function', () => {
    const triangle = new triangleDeterminer(2,4,5);
    expect(triangle.s1).toEqual(2);
    expect(triangle.s2).toEqual(4);
    expect(triangle.s3).toEqual(5);
  });
});