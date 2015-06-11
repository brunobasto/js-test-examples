describe(
	'Mocha Test Suite',
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
				chai.assert.equal(
					this.bruno.getFullName(),
					'Bruno Basto'
				);
			}
		);
	}
);