# 🕒 TimeWise – Attendance Tracking App

**TimeWise** is a web-based attendance tracking system built to simplify daily time monitoring for teams and individuals. It features secure authentication, real-time logging, and a clean, modern interface designed for efficiency and reliability.

LINK TO BACKEND: https://github.com/gippo05/timewise-login-system-backend

---

## 🚀 Features

- **🔐 JWT Authentication**  
  Secure login and logout functionality powered by JSON Web Tokens (JWT).  
  Only authorized users can access protected routes and perform time-related actions.

- **🕓 Time Recording**  
  Users can clock in and out, with each record accurately saved to the database.  
  The app automatically timestamps every login and logout session.

- **📊 Attendance Management**  
  View, track, and manage attendance history (admins can access full logs if role-based access is added later).

- **💻 Modern Tech Stack**
  - **Frontend:** React + TailwindCSS (modern dark theme)
  - **Backend:** Node.js + Express.js
  - **Database:** MongoDB
  - **Authentication:** JWT
  - **Deployment:** Vercel (frontend) & Render (backend)

---

## ⚙️ Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/TimeWise.git
   cd TimeWise
Install dependencies

bash
Copy code
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
Create a .env file in the backend directory:

ini
Copy code
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run the app

bash
Copy code
# Backend
npm run dev

# Frontend (in another terminal)
npm start
🔒 Authentication Flow
User logs in with email and password.

Server verifies credentials and returns a JWT.

Client stores token (in localStorage or context).

Protected routes require token validation before granting access.

Logout clears stored token and ends session.

🧠 Future Enhancements
Admin dashboard for user and attendance management

Role-based access control

Analytics and reporting features

Biometric or QR code integration for clocking in/out

Push notifications and reminders

👨‍💻 Author
Gipps
Full Stack Developer in progress | Building practical tools with the MERN stack

