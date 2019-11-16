function is_username_valid(user){
	var userReg = /^[a-z]{5,}$/;
	var userValid = user.match(userReg);

	if (userValid == null) {
		return false
	} else {
		return true
	}
}
var user = "arkademy"
console.log(is_username_valid(user));


function is_password_valid(pass) {
	var passReg = /^[0-9]{2}[&|@][A-Z]{4}$/;
	var passValid = pass.match(passReg);
	if(passValid == null) {
		return false
	} else {
		return true
	}
}
var pass = "29@PASS"
console.log(is_password_valid(pass));