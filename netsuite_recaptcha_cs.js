/* Original Author - Emil Olaguir, Jr.
 * https://pulse.tips/google-recaptcha-for-netsuite-online-forms_58df6fb61723dda223accbef.html
 */

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