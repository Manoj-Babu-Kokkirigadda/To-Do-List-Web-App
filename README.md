# MERN To-Do List Web App 📝

A full-stack To-Do List web application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). This project demonstrates CRUD functionality and full-stack integration with deployment.

---

## 🌐 Live Demo

- Frontend (Vercel/Netlify): [Live URL](https://focused-action-plan.lovable.app)
- Backend API (Render/Railway): [API Endpoint](#)

---

## 📂 Project Structure

```
todo-list-mern/
├── client/              # React frontend
│   ├── public/
│   └── src/
├── server/              # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   └── server.js
├── README.md
└── .env                 # Environment variables (in server/)
```

---

## 🚀 Features

- Add, edit, delete, and mark todos as completed ✅
- Full CRUD functionality with MongoDB
- Responsive UI with React
- REST API integration
- Secure deployment using `.env` files
- Deployed using Vercel (frontend) and Render (backend)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Axios, CSS (or Tailwind)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Version Control**: Git & GitHub
- **Deployment**: Vercel (Frontend), Render/Railway (Backend)

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/todo-list-mern.git
cd todo-list-mern
```

### 2. Setup the Backend
```bash
cd server
npm install
# Create a .env file with the following:
# PORT=5000
# MONGO_URI=<your_mongo_connection_string>
npm start
```

### 3. Setup the Frontend
```bash
cd ../client
npm install
npm start
```

---

## 🌍 Deployment

- Deploy **client** folder to Vercel/Netlify
- Deploy **server** folder to Render/Railway
- Ensure CORS is configured properly on the backend

---

## 📬 API Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | /api/todos       | Get all todos       |
| POST   | /api/todos       | Create a new todo   |
| PUT    | /api/todos/:id   | Update a todo       |
| DELETE | /api/todos/:id   | Delete a todo       |

---

## 👨‍💻 Author

**Manoj Babu Kokkirigadda**  
[GitHub](https://github.com/Manoj-Babu-Kokkirigadda)  
[Email](mailto:kokkirigaddamanojbabu@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
