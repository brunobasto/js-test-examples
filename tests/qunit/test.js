QUnit.module(
	'QUnit Test Suite',
	{
		beforeEach: function() {
			this.array = [];
		},

		afterEach: function() {
			this.array = null;
		}
	}
);

QUnit.test(
	'Qunit Test',
	function(assert) {
		assert.ok(
			this.array.length === 0,
			'This assertion should pass.'
		);
	}
);