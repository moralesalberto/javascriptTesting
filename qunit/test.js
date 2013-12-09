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

