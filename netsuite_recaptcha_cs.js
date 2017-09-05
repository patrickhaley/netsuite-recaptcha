/* MIT License (MIT)
 * 
 * Copyright (c) 2017 - Patrick Haley
 * Original Author - Emil Olaguir, Jr.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
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
