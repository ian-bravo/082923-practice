// Business Logic



export default function Triangle(s1, s2, s3) {
    //let response;
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
}
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



// // User Logic
// function userSubmissionProcessor(event) {
//     event.preventDefault();

//     const side1 = parseInt(document.querySelector("input#sideOne").value);
//     const side2 = parseInt(document.querySelector("input#sideTwo").value);
//     const side3 = parseInt(document.querySelector("input#sideThree").value);

//     let printToUser = triangleDeterminer(side1, side2, side3);
//     document.getElementById("result").innerText = printToUser;

//     document.getElementById("showResultsDiv").removeAttribute("class");
// }

// function initialFx () {
//     let userEnteredForm = document.querySelector("#user-entered-numbers");
//     userEnteredForm.addEventListener("submit", userSubmissionProcessor);
// }

// window.addEventListener("load", initialFx);