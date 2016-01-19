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


$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());
    var result = triangle(sideOne, sideTwo, sideThree);

    $("span#answer").text(result);
    $("#output").show();


console.log(result);
    event.preventDefault();
  });
});
