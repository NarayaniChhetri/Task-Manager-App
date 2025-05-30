# 📝 Task Manager App

Welcome to the **Task Manager App** – a full-stack project built with **Express.js (Backend)** and **React (Frontend)**. This application helps manage your daily tasks efficiently while showcasing full CRUD functionality with user authentication.

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, JWT  
- **Frontend:** React, Vite, TailwindCSS  
- **Database:** MongoDB Atlas  

---

## 📦 Prerequisites

- Node.js  
- MongoDB Atlas account  
- Git  

---

## ⚙️ Getting Started

### 🔧 Clone the Repository

1. Clone the repository:
   ```bash
   git clone https://github.com/kshanxs/Task-Manager-App.git
   ```

---

### 🔧 Backend Setup (Express.js)

1. Navigate to the backend folder:
   ```bash
   cd task-manager-app/backend
   ```

2. Rename `.env.example` to `.env` and configure the following environment variables:
   ```dotenv
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ADMIN_INVITE_TOKEN=020305
   PORT=8000
   ```

   - **ADMIN_INVITE_TOKEN**: This token (`020305`) is used to invite new admin users. You can change this token to any value you prefer by updating the `ADMIN_INVITE_TOKEN` in the `.env` file.

3. Install dependencies and start the backend server:

   ```bash
   npm install
   ```

   ```bash
   npm run dev
   ```

For detailed backend setup instructions, refer to the [Backend README](./backend/README.md).

---

### 🖥️ Frontend Setup (React)

For detailed frontend setup instructions, refer to the [Frontend README](./frontend/README.md).

---

## 🛠️ Running the Project

You can run both the backend and frontend simultaneously using the following commands:

1. Install dependencies for both backend and frontend:
   ```bash
   npm run install:all
   ```

2. Install `concurrently` globally (if not already installed):
   ```bash
   npm install concurrently
   ```

3. Start both servers:
   ```bash
   npm run start
   ```

---

## 🗑️ Resetting the Backend

To **completely reset the backend** (delete all users, tasks, and uploaded profile pictures except the default), you can use one of the following commands:

1. Run the reset script directly:
   ```bash
   npm run reset-backend
   ```

---

## 📂 Project Structure

```
/task-manager
├── backend/         # Backend code (Express.js)
├── frontend/        # Frontend code (React)
├── package.json     # Root package.json for managing scripts
├── .gitignore       # Git ignore file
└── README.md        # Root README
```

---

## 📄 Additional Documentation

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)

---
