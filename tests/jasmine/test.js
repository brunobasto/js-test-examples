describe(
	'Jasmine Test Suite',
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
				expect(this.array.length).toBe(0);
			}
		);
	}
);