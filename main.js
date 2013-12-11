var MyClass = function (color) {
  
  MyClass.addInstance(this);

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

MyClass.instances = [];
MyClass.addInstance = function (instance) {
  MyClass.instances.push(instance);
};


var uuid = function () {
  var _uuid = ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    }));
  return _uuid;
};


var runApp = {
  init : function() {
    return this.run(1,2,3);
  },

  run: function(one, two, three) {
    return(one+two+three);
  }
};
