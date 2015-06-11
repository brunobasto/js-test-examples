QUnit.module(
	'QUnit Test Suite',
	{
		beforeEach: function() {
			this.bruno = new Human('Bruno', 'Basto');
		},

		afterEach: function() {
			this.bruno.destroy();
		}
	}
);

QUnit.test(
	'Qunit Test',
	function(assert) {
		assert.equal(
			this.bruno.getFullName(),
			'Bruno Basto',
			'This assertion should pass.'
		);
	}
);