const nodeMailer = require("../config/nodemailer");

exports.forgotPassword = (user, password) => {
  let htmlString = nodeMailer.renderTemplate(
    { user: user, password: password },
    "/password/forgotpass.ejs"
  );
  nodeMailer.transporter.sendMail(
    {
      from: "shaikhsohel0082@gmail.com",
      to: user.email,
      subject: "Reset Password",
      html: htmlString,
    },
    (err, info) => {
      if (err) {
        console.log("Error in sending mail", err);
        return;
      }

      console.log("Message send", info);
      return;
    }
  );
};
