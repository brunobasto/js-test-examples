describe(
	'Mocha Test Suite',
	function() {
		beforeEach(
			function() {
				this.array = [];
			}
		);

		afterEach(
			function() {
				this.array = null;
			}
		);

		it(
			'should pass this test.',
			function() {
				chai.assert.equal(this.array.length, 0);
			}
		);
	}
);