(function() {
	function Human(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	};

	Human.prototype.destroy = function() {
		this.firstName = null;
		this.lastName = null;
	};

	Human.prototype.getFirstName = function() {
		return this.firstName;
	};

	Human.prototype.getLastName = function() {
		return this.lastName;
	};

	Human.prototype.getFullName = function() {
		return this.getFirstName() + ' ' + this.getLastName();
	};

	window.Human = Human;
})();