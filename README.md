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

### 🔧 Backend Setup (Express.js)

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

To **completely reset the backend** (delete all users, tasks, and uploaded profile pictures except the default):

```bash
npm run reset --prefix backend
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
