# Backend - Task Manager

This is the backend for the **Task Manager App**, built with **Express.js** and **MongoDB**. It provides APIs for user authentication, task management, and reporting.

---

## 📦 Prerequisites

- **Node.js** or **Bun**
- **MongoDB Atlas** or a local MongoDB instance
- Environment variables configured in a `.env` file

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup (Express.js)

1. **Navigate to the backend folder**  
   ```bash
   cd backend
   ```

2. **Install dependencies**  
   - Using **Node.js**:
     ```bash
     npm install
     ```
   - Using **Bun**:
     ```bash
     bun install
     ```

3. **Setup MongoDB Connection**
   - Go to [MongoDB Atlas](https://www.mongodb.com/)
   - Create a free account and a new project.
   - Build a new cluster and choose a free tier.
   - Whitelist your IP and create a database user.
   - Choose “Drivers” as the connection method.
   - Copy the provided MongoDB connection string.

4. **Environment Configuration**
   - **Rename** `.env.example` to `.env`
   - Paste your connection string into the `.env` file.
   - Replace `<password>` with your database user password.

5. **Generate a JWT Secret**
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```
   - Paste the generated value into the `.env` file under `JWT_SECRET`.

6. **Run the Backend Server**
   - Using **Node.js**:
     ```bash
     npm run dev
     ```
   - Using **Bun**:
     ```bash
     bun run dev:bun
     ```

---

## 🗑️ Resetting the Backend

To delete all users, tasks, and uploaded profile pictures (except the default):

### Using Node.js:
```bash
npm run reset
```

### Using Bun:
```bash
bun run reset:bun
```

---

## 📂 Project Structure

```
/backend
├── config/           # Database configuration
├── controllers/      # API controllers
├── middlewares/      # Custom middleware
├── models/           # Mongoose models
├── routes/           # API routes
├── scripts/          # Utility scripts (e.g., reset-backend.js)
├── uploads/          # Uploaded files (e.g., profile pictures)
├── .env.example      # Example environment variables
├── server.js         # Entry point for the backend
```

---

## 🛠️ Additional Notes

- This project was created using `bun init` in **Bun v1.2.14**. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
- For frontend setup, refer to the [Frontend README](../frontend/README.md).
