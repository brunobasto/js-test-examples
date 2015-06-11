describe(
	'Jasmine Test Suite',
	function() {
		beforeEach(
			function() {
				this.bruno = new Human('Bruno', 'Basto');
			}
		);

		afterEach(
			function() {
				this.bruno.destroy();
			}
		);

		it(
			'should pass this test.',
			function() {
				expect(this.bruno.getFullName()).toBe('Bruno Basto');
			}
		);
	}
);