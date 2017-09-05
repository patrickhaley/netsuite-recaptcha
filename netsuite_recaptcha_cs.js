function onSubmit() {
	var captchaSuccess = false;
	var captchaResponse = $('#g-recaptcha-response').val();
	if (captchaResponse != "") {
		captchaSuccess = true;
	} else {
		alert("Please prove you're not a robot.")
	}
	return captchaSuccess;
}