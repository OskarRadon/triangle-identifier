var triangle = function(sideOne, sideTwo, sideThree) {
  if (sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo)) {

      if (sideOne === sideTwo && sideTwo === sideThree) {
        return "equilateral";
      } else if (sideOne === sideTwo || sideTwo === sideThree || sideThree === sideOne){
        return "isosceles";
      } else  {
        return "scalene";
      }

    } else {
      return "not a triangle";
    }
  };

// var triangle = function(sideOne, sideTwo, sideThree){
//   if (sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo)) {
//     if (sideOne===sideTwo && sideTwo===sideThree) {
//       return "equilateral";
//     } else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
//       return "isosceles";
//     } else {
//       return "scalene";
//     }
//   } else {
//     return "These sides do not a triangle make.";
//   }
// };





// (
//   return false;
