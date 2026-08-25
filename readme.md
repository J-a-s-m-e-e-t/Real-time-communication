# 💬 Communify — Real-Time Communication Platform

Communify is a full-stack real-time communication platform that enables users to connect, interact, and collaborate through instant messaging and video communication. The application provides a modern user experience with secure authentication, user discovery, friend connections, and real-time communication powered by Stream.

## 🌐 Live Demo

🔗 Live Application: [Add your deployed frontend URL here]

---

## ✨ Features

* 🔐 Secure Authentication

  * User signup and login
  * JWT-based authentication
  * Secure cookie handling
  * Protected routes

* 👥 User & Social Features

  * User onboarding
  * Discover and view other users
  * Send and manage friend requests
  * Accept friend requests and build connections

* 💬 Real-Time Communication

  * Real-time chat functionality
  * Conversations between connected users
  * Stream-powered communication infrastructure

* 🎥 Video Calling

  * Real-time video calling capabilities
  * Video communication powered by the Stream Video SDK

* 🎨 Modern Responsive UI

  * Responsive design for different screen sizes
  * Modern component-based interface
  * Toast notifications for user feedback

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router
* Tailwind CSS
* DaisyUI
* Zustand
* TanStack React Query
* Axios
* React Hot Toast
* Stream Chat React
* Stream Video React SDK

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* CORS
* bcryptjs
* Stream Chat API

---

## 🏗️ Project Architecture

```text
Real-time-communication/
│
├── frontend/                 # React + Vite client application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/                  # Express.js server
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB database or MongoDB Atlas account
* Stream account for Chat and Video APIs

### 1. Clone the Repository

```bash
git clone https://github.com/J-a-s-m-e-e-t/Real-time-communication.git
cd Real-time-communication
```

### 2. Install Dependencies

Install dependencies for both the frontend and backend:

```bash
npm install --prefix frontend
npm install --prefix backend
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

> ⚠️ Never commit your `.env` file or API secrets to GitHub.

### 4. Start the Backend

```bash
cd backend
npm run dev
```

The backend server will start on the configured port.

### 5. Start the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The application will then be available on the local URL provided by Vite.

---

## 🔄 How It Works

1. A user creates an account or logs into the platform.
2. The backend securely authenticates the user using JWT.
3. Users can complete their profile and discover other users.
4. Friend requests allow users to establish connections.
5. Connected users can communicate using real-time chat features.
6. Stream services provide the infrastructure required for scalable chat and video communication.

---

## 🔒 Authentication & Security

Communify uses a secure authentication flow based on:

* Password hashing with `bcryptjs`
* JWT-based authentication
* HTTP cookie handling
* Protected backend routes
* Environment variables for sensitive credentials

---

## 📈 Key Learning Outcomes

Building this project provided hands-on experience with:

* Designing a full-stack client-server architecture
* Implementing authentication and authorization
* Working with REST APIs
* Managing application and server state
* Integrating third-party communication SDKs
* Building real-time communication features
* Deploying frontend and backend applications

---

## 🔮 Future Improvements

* [ ] Group chat functionality
* [ ] Online/offline user presence
* [ ] Typing indicators
* [ ] Message reactions and file sharing
* [ ] Push notifications
* [ ] Video call history
* [ ] Improved profile customization
* [ ] Automated testing
* [ ] CI/CD pipeline

---

## 👨‍💻 Author

**Jasmeet Singh**

* GitHub: [@J-a-s-m-e-e-t](https://github.com/J-a-s-m-e-e-t)

---

⭐ **If you found this project interesting, consider giving the repository a star!**
