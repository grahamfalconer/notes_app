function testCircleRadiusDefaultsTo10() {
    var circle = new Circle();
    assert.isTrue(circle.radius === 10);
  };
  
// testCircleRadiusDefaultsTo10();

  function testCircleRadiusIsEqualTo10(){
      var circle = new Circle();
      assert.isEqual(circle.radius, 12)
  };

//   testCircleRadiusIsEqualTo10();

  it("Test if circle radius is equal to 10", function() {
    var circle = new Circle();
    assert.isEqual(circle.radius, 13)
  })