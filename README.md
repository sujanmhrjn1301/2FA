# Project Overview
This Node.js application allows users to log in using a username and password, send a verification code via SMS using Twilio, and verify the code to access a welcome page.
Demo
[Click me for Demo](https://youtu.be/5AVt_H1k7OY)

# Technical Requirements
## Software Requirements
### Node.js: 
Ensure you have Node.js installed. This project is compatible with Node.js version 14 or higher.
### NPM: 
Node Package Manager, which comes with Node.js.

## Dependencies
Install the following packages using npm:
1. express:Fast, unopinionated, minimalist web framework for Node.js.
```bash
npm install express
```
2. body-parser: Middleware to parse incoming request bodies.
```bash
npm install body-parser
```
3. twilio: Twilio's Node.js library for making API requests.
```bash
npm install twilio
```
5. dotenv: Loads environment variables from a .env file into process.env.
``` bash
npm install dotenv
```

## Environment Variables
Create a .env file in the root of your project directory with the following variables:
```bash
TWILIO_ACCOUNT_SID=<Your_Twilio_Account_SID>
TWILIO_AUTH_TOKEN=<Your_Twilio_Auth_Token>
TWILIO_SERVICE_ID=<Your_Twilio_Service_ID>
USER_PHONE_NUMBER=<User_Phone_Number>
```

## Directory Structure
```bash
/project-root
│
├── /public
│   ├── login.html
│   ├── verify.html
│   └── welcome.html
│
├── .env
├── .gitignore
├── server.js
└── package.json
```
## Getting Started
1. Clone the Repository
2. ```bash
   git clone https://github.com/sujanmhrjn1301/2FA.git
   ```
3. Install Dependencies
   ```bash
   npm install
   ```
5. Set up Environment Variables
   Create a .env file in the project root and add your Twilio credentials.
7. Start the sever.js
   ```bash
   node server.js
   ```
## Security Considerations
1. Keep your .env file confidential and do not share it publicly or include it in version control.
2. Ensure that any sensitive data, such as the Twilio credentials and phone numbers, are handled securely.

   
