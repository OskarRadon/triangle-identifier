describe("triangle", function() {
  // it("Not a triangle if the sum of two sides is less than or equal to the third", function(){
  //   expect(triangle(2, 2, 5)).to.equal("not a triangle");
  // });

  it("is an equilateral triangle", function() {
    expect(triangle(2, 2, 2)).to.equal("equilateral");
  });

  it("is an isosceles triangle", function() {
    expect(triangle(2, 2, 4)).to.equal("isosceles");
  });

  it("is a scalene triangle", function() {
    expect(triangle(1, 2, 3)).to.equal("scalene");
  });

});
