test( "should be able to call a method inside of an object from inside object", function () {
	var runApp = {
		init : function() {
			return this.run(1,2,3);
		},

		run: function(one, two, three) {
			return(one+two+three);
		}
	};

	equal(runApp.init(), 6);

} );

test("can instantiate a class and have the methods available from the prototype", function () {

  var MyClass = function (color) {

    this.color = color;

    this.setColor = function (newColor) {
      this.color = newColor;
    };

    this.paint = function () {
      return "painting";
    };
  };

  var myClass = new MyClass("red");

  equal(myClass.color, "red");
  equal(myClass.paint(), "painting");
  myClass.setColor("white");
  equal(myClass.color, "white");
});


