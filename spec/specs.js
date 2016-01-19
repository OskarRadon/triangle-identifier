describe("triangle", function() {

  it("determines if three sides create a valid triangle", function(){
    expect(triangle(2, 2, 8000)).to.equal("triangle");
  });

  it("determines if three sides make an equilateral triangle", function() {
    expect(triangle(7, 7, 7)).to.equal("equilateral");
  });

  it("determines if three sides make an isosceles triangle", function() {
    expect(triangle(7, 7, 4)).to.equal("isosceles");
  });

  it("determines if three sides make a scalene triangle", function() {
    expect(triangle(2, 3, 4)).to.equal("scalene");
  });

});
