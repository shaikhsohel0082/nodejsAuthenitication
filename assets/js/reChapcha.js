let runVerify = async function (e) {
  // Prevent default form submission
  e.preventDefault();

  // Check if reCAPTCHA was successfully completed
  if (grecaptcha && grecaptcha.getResponse()) {
    // Get the reCAPTCHA response token
    const captchaToken = grecaptcha.getResponse();

    // Send the token to server for validation
    let response = await fetch("/users/captchaValidate", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ captcha: captchaToken }),
    });

    let data = await response.json();

    if (data.success) {
      // If captcha validation is successful, submit the form
      document.getElementById("verify-form").submit();
    } else {
      // If captcha validation fails, display an error message
      new Noty({
        theme: "relax",
        text: "Captcha Failed, try again! ",
        type: "error",
        layout: "topRight",
        timeout: 1500,
      }).show();
    }
  } else {
    // If reCAPTCHA was not completed, prompt the user to complete it
    alert("Please complete the reCAPTCHA verification.");
  }
};

// Attach the form submission handler to the form
document.getElementById("verify-form").addEventListener("submit", runVerify);
