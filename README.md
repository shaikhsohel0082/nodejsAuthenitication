# Nodejs - Authentication

A complete authentication system which can be used as a starter code for creating any new application

## Functionality

`Home Page:`

- A simple page contain signin and signup button.

  ![Homepage](/assets/images/a/home.png)

`Sign-Up:`

- Sign-In page contains four fields name, email, password ans confirm password.
- On submit user redirect to sign-in page.
- User also can use google for sign-in.
- User also get Welcom mail from us.
- Google reChapcha V3 is also use here.

  ![Sign-Up](/assets/images/a/signup.png)

`Sign-In:`

- Sign-In page contains two fields email and password.
- User can sign in using Google.
- Google reChapcha V3 is also use here.

  ![Sign-In](/assets/images/a/signin.png)

- If user forget password he can use his email to get new password.
- Mail is send to the verified user which contains a random password which he/she can use to reset password.

  ![forgot pass](/assets/images/a/forgetpassword.png)

`Profile:`

- After logn user redirect to his profile page.
- Simple page welcome user.

  ![Homepage](/assets/images/a/profile.png)

`Reset-Password:`

- If user want to rest his/her password so he can reset his password.
- Mail is send to the verified user which contains a random password which he/she can use to reset password.
- User can also rest his password using google.

  ![Homepage](/assets/images/a/resetpassword.png)

## Folder Structure

#### This code follows MVC (Model, View, Controller) Architecture.

- Assets: It contains all static file CSS, JS, Images.
- Config: It contains connection to Database, Authentication etc.
- Controller: It redirect the webpage according to user action.
- Mailer: It contains different mailing config.
- Models: It contains Database Schema.
- Routes: It contains all routes.
- Views: It contins all file which render UI to browser.

## Note:

Captcha verification(I am Not Robot) will not work on LoacalHost.

## Getting Started

1. Clone the project.
2. Go to folder.
3. Install Dependencies.
   ```
   npm install
   ```
4. Connect to mongodb.
5. Give user credentials in `config > passorport-google-outh2`.
6. Give your mail credentials in `config > nodemailer`
7. Also change google reChapcha site key and seceret key.
8. Set Environment Variables by creating .env file
   ```
   emailid=YourEmailID
   pass=Password
   MONGO_URL=AtlasMongoUrl
   clientID=GoogleClientID
   clientSecret=GoogleSecretKey
   ```
9. Run command: `npm start` OR ` node index.js`
10. Go to https://localhost/3500 
  OR
  https://nodejsauthenitication.onrender.com

to use the application.
