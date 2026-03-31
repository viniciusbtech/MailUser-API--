📌 Description

The UserMailer API is a simple backend application built with Node.js and Express that allows you to:

Create users
Store them in memory (mock database)
Automatically send a confirmation email upon registration using Nodemailer and SMTP (Gmail)

This project is ideal for learning:

Backend fundamentals
Email integration
Error handling
REST API basics

🛠️ Technologies Used
Node.js
Express
Nodemailer
SMTP (Gmail)
⚙️ How It Works
🔥 Flow:
Client sends a request to create a user
Backend stores the user in a fake database (array)
Backend sends an email using Nodemailer
Returns response:
Success → user created + email sent
Partial → user created but email failed
📦 Installation
# Clone the repository
git clone https://github.com/your-username/usermailer-api.git

# Enter the project folder
cd usermailer-api

# Install dependencies
npm install
▶️ Running the Project
node index.js

Server will run at:

http://localhost:3000
🔐 Gmail Configuration (IMPORTANT)

To use Gmail SMTP, you must generate an App Password:

Go to your Google Account
Enable 2-Step Verification
Generate an App Password
Replace in code:
auth: {
  user: "your_email@gmail.com",
  pass: "your_app_password"
}

⚠️ Never use your real password!

📡 API Endpoint
➜ Create User

POST /users


📂 Project Structure
usermailer-api/
│
├── index.js
├── package.json
└── README.md

⚠️ Limitations
Uses in-memory storage (data is lost on restart)
No validation for email format
No authentication
No database integration
🚧 Possible Improvements
Add database (MongoDB, PostgreSQL)
Validate inputs (Joi, Zod)
Use environment variables (.env)
Add logging system
Add retry mechanism for email sending
Implement queue (RabbitMQ, Bull)

👨‍💻 Author

Developed as a study project for backend learning and technical exams.
