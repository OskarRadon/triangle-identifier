var triangle = function(sideOne, sideTwo, sideThree) {
  // if (sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne +sideTwo))

    if (sideOne === sideTwo && sideTwo === sideThree) {
    return "equilateral";
  } else if (sideOne === sideTwo || sideTwo === sideThree){
    return "isosceles"
  };
  // (sideOne === sideTwo {
  //   return "equilateral";
  // }

  };







// (
//   return false;
