## Project Set-up
To run the code locally this repository requires certain environment variables to be set up. Below are the variables needed along with their descriptions:
- BACKEND_URL: Stores the URL of the backend host server.
- FRONTEND_URL: Stores the URL of the frontend application.
- MONGO_URI: Saves the MongoDB URI, with the database name set to "Registration".
- EMAIL: Saves the sender's email address (preferably Outlook ID).
- PASSWORD: Saves the password for the sender's email account.
- NAME: Saves the name of the sender.

## Steps to set up environment variables:
- Create a .env file: Start by creating a file named .env at the root of the project directory.
- Define variables: Within the .env file, define the required variables. For example:

```sh
BACKEND_URL=http://localhost:<PORT1>
FRONTEND_URL=http://localhost:<PORT2>
MONGO_URI=mongodb://username:password@host:port/Registration
EMAIL=example@outlook.com
PASSWORD=yourpassword
NAME=Your Name
```
- Replace the placeholder values with your actual URLs, MongoDB URI, email address, password, and name.

## How to use
- Fill the details and click on submit to register.

## Key features
- Data Storage in MongoDB with Hashed Passwords: User details will be stored in MongoDB with hashed passwords, ensuring security and protection of user data.
- Email Verification Link: Upon registration, a verification link will be sent to the registered email address. This link serves as a means for users to confirm their email addresses.
- Email Address Verification: Users must visit the verification link sent to their email addresses to verify their accounts. This process ensures that the provided email address is valid and belongs to the user registering.
- Updating Email Verification Status: Once the user visits the verification link, their email verification status will be updated in MongoDB, indicating that the email address has been successfully verified.
  
