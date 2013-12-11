test( "should be able to call a method inside of an object from inside object", function () {
	equal(runApp.init(), 6);
} );

test("can instantiate a class and have the methods available from the prototype", function () {
  equal(MyClass.instances.length, 0);

  var myClass = new MyClass("red");
  equal(myClass.color, "red");
  equal(myClass.paint(), "painting");
  myClass.setColor("white");
  equal(myClass.color, "white");
  // functions have access to local vars in the class
  equal(myClass.getOriginalColor(), "red");
  myClass.reset();
  equal(myClass.color, "red");
  equal(MyClass.instances.length, 1);
});

test ("undefined", function () {
  var object = {}
  object.color = "blue";
  equal(object.shade, undefined, "responds to undefined as expected");
  equal(object.color, "blue", "this is set to blue, control sample");
  object.shade = "gray";
  equal(object.shade, "gray", "now we define the property so it should be fine");
});

test ("can genereate a uuid", function () {
  equal(uuid().length, "1e9131b2-a379-4650-831d-5fdd5316e038".length);
});
