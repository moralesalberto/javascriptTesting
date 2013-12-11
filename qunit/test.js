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

    // a "private variable
    var _originalColor = color;
    var _self = this;

    // private method
    // notice we have to save this in the local var _self
    // so that we can access it when this function is called
    var _resetColor = function () {
      _self.color = _originalColor;
    };


    // public property
    this.color = color;

    // public methods
    this.setColor = function (newColor) {
      this.color = newColor;
    };

    this.paint = function () {
      return "painting";
    };

    this.getOriginalColor = function () {
      return _originalColor;
    };

    this.reset = function () {
      _resetColor();
    };
  };

  var myClass = new MyClass("red");

  equal(myClass.color, "red");
  equal(myClass.paint(), "painting");
  myClass.setColor("white");
  equal(myClass.color, "white");

  // functions have access to local vars in the class
  equal(myClass.getOriginalColor(), "red");

  myClass.reset();
  equal(myClass.color, "red");
});

test ("undefined", function () {
  var object = {}
  object.color = "blue";
  equal(object.shade, undefined, "responds to undefined as expected");
  equal(object.color, "blue", "this is set to blue, control sample");
  object.shade = "gray";
  equal(object.shade, "gray", "now we define the property so it should be fine");
});
