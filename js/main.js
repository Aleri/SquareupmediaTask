
function validateForm() {

		var valid = false;
		var fName = document.getElementById("firstname"),
		lName = document.getElementById("surename"),
		email = document.getElementById("email"),
		checkbox = document.getElementById("terms"),
		chbx = document.getElementById("hidden"),
		btn = document.getElementById("form-submit");
	 	var regexName = /^[a-zA-Z ]{2,30}$/,
	 		regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(fName.value === "" || fName.value === null || !regexName.test(fName.value)) {
			fName.placeholder = "Enter name";
			fName.value = " ";
			fName.focus();
			return false;
			
		}

			if(lName.value === "" || lName.value === null || !regexName.test(lName.value)) {
				lName.placeholder = "Enter surename";
				lName.focus();
				return false;
			}
			if(email.value === "" || email.value === null || !regexEmail.test(email.value)) {
				email.placeholder = "Enter a valid email";
				email.focus();
				email.value="";
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

