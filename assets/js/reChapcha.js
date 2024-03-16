let runVerify = async function (e) {
  //--- stop default submit action
  e.preventDefault();

  //---- create a captcha token from Google reCAPTCHA
  const captchaToken = await grecaptcha.execute(
    "6LdM3ZopAAAAAJdycJXhv2myBOrc5dy5bI9sIWKk", // Replace YOUR_SITE_KEY with your actual Google reCAPTCHA site key
    { action: "homepage" }
  );

  console.log(captchaToken);

  //---- checking the authentication of the captcha
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
    document.getElementById("verify-form").submit();
  } else {
    //alert("Captcha Failed, try again");
    new Noty({
      theme: "relax",
      text: "Captcha Failed, try again! ",
      type: "error",
      layout: "topRight",
      timeout: 1500,
    }).show();
  }
};
document.getElementById("verify-form").addEventListener("submit", runVerify);
