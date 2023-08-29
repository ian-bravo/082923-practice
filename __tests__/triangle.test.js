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

  test('will define what is a triangle', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.s1 < (triangle.s2 + triangle.s3) && triangle.s3 < (triangle.s1 + triangle.s2) && triangle.s2 < (triangle.s1 + triangle.s3)).toEqual();
  });
});

//     if(s2 + s3 > s1 && s1 + s2 > s3 && s3 + s1 > s2) {
//         if (s1 === s2 && s2 === s3 && s3 === s1) {
//             response = "Equilateral triangle.";
//         } else if (s1 === s2 || s2 === s3 || s3 === s1) {
//             response = "Isosceles triangle.";
//         } else {
//             response = "Scalene triangle.";
//         }
//     } else {
//         response = "Not a triangle.";
//     }
//     return response;
// }