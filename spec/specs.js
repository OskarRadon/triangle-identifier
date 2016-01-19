describe("triangle", function() {
  // it("is true for three values where the sum of two is greater or equal to the third", function(){
  //   expect(triangle(1, 2, 3)).to.equal(true);
  // });

  it("is an equilateral triangle", function() {
    expect(triangle(2, 2, 2)).to.equal("equilateral");
  });

  it("is an isosceles triangle", function() {
    expect(triangle(2, 2, 4)).to.equal("isosceles");

  });

});
