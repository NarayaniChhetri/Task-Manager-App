# Frontend - Task Manager

This is the frontend for the **Task Manager App**, built with **React**, **Vite**, and **TailwindCSS**. It provides a user-friendly interface for managing tasks, user authentication, and reporting.

---

## 📦 Prerequisites

- **Node.js** or **Bun**
- A backend server running (refer to the [Backend README](../backend/README.md))

---

## ⚙️ Setup Instructions

### 🖥️ Frontend Setup (React)

1. **Navigate to the frontend folder**
   ```bash
   cd frontend
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

3. **Start the development server**
   - Using **Node.js**:
     ```bash
     npm run dev
     ```
   - Using **Bun**:
     ```bash
     bun run dev:bun
     ```

---

## 📂 Project Structure

```
/frontend
├── public/           # Static assets
├── src/              # Source code
│   ├── components/   # Reusable components
│   ├── pages/        # Application pages
│   ├── context/      # Context API for state management
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Utility functions
│   ├── assets/       # Images and other assets
│   ├── App.jsx       # Main application component
│   ├── main.jsx      # Entry point for the app
├── index.html        # HTML template
├── package.json      # Project configuration
├── vite.config.js    # Vite configuration
```

---

## 🛠️ Additional Notes

- Ensure the backend server is running before starting the frontend.
- For backend setup, refer to the [Backend README](../backend/README.md).
