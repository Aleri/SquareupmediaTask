
function validateForm() {

		var valid = false;
		var fName = document.getElementById("firstname");
		var lName = document.getElementById("surename");
		var email = document.getElementById("email");
		var checkbox = document.getElementById("terms");
		var chbx = document.getElementById("hidden");
		var btn = document.getElementById("form-submit");
	 	var regexName = /^[a-zA-Z ]{2,30}$/,
	 		regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(fName.value === "" || fName.value === null || !regexName.test(fName.value)) {
			fName.value = "";
			fName.placeholder = "Enter name";
			fName.focus();
			return false;

		}

		if(lName.value === "" || lName.value === null || !regexName.test(lName.value)) {
			email.value = "";
			lName.placeholder = "Enter surename";
			lName.focus();
			return false;
		}
		if(email.value === "" || email.value === null || !regexEmail.test(email.value)) {
			email.value = "";
			email.placeholder = "Enter a valid email";
			email.focus();
			return false;
		}

		if(checkbox.checked === false) {
			hidden.style.display = "block";
			return false;
		}


	return onSubmit(fName, lName, email, btn, checkbox);
}

function onSubmit(fName, lName, email, btn, checkbox) {
	fName.disabled = true;
	lName.disabled = true;
	email.disabled = true;
	checkbox.disabled = true;
	hidden.style.display = "none";
	btn.value = "Thank you!";
	btn.disabled = true;

	return false;
}
