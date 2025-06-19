# 💰 Expense Tracker App

A modern fullstack Expense Tracker web application that allows users to sign up, log in, and manage their personal expenses by category, date, and amount — all in one clean, intuitive interface.

---

## 🚀 Features

* ✅ User Authentication (Email/Password + Google OAuth)
* 🌐 Country & Currency selection with REST Countries API
* 📅 Add, edit & delete expenses
* 📊 View and filter expenses by date, category, or amount
* 🌃 Light/Dark theme toggle
* 🔐 Secure backend API with Node.js & PostgreSQL
* 🌍 Hosted backend via Render

---

## 🧰 Tech Stack

### Frontend

* **React** (Functional Components + Hooks)
* **TailwindCSS** for styling
* **React Hook Form** for form management
* **Headless UI** for dropdowns & inputs
* **React Icons**

### Backend

* **Node.js** with **Express.js**
* **PostgreSQL** (via [Render](https://render.com))
* **JWT** for secure user sessions
* **bcrypt** for password hashing
* **RESTful API** design

---

## 🌐 Live Demo

> 🔗 Coming soon... (or add Render/Vercel/Fly.io/Netlify links)

---

## 🖥️ Screenshots

| Sign In                       | Sign Up                       | Dashboard                        |
| ----------------------------- | ----------------------------- | -------------------------------- |
| ![](./screenshots/signin.png) | ![](./screenshots/signup.png) | ![](./screenshots/dashboard.png) |

---

## 📁 Project Structure

```bash
expense-tracker/
├── backend/                  # Express.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/                 # React frontend
│   ├── components/
│   ├── pages/
│   ├── store/                # Zustand state management
│   ├── libs/                 # fetchCountries and other APIs
│   ├── App.jsx
│   └── main.jsx
├── .env                      # Environment variables
├── README.md
└── package.json
```

---

## ⚙️ Installation

1. **Clone the repo**

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

2. **Setup Backend**

```bash
cd backend
npm install
# Add your .env with DATABASE_URL, JWT_SECRET, etc.
npm run dev
```

3. **Setup Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 📦 Environment Variables

In your `backend/.env`:

```env
PORT=5000
DATABASE_URL=your_postgres_url
JWT_SECRET=your_jwt_secret
```

In your `frontend/.env` (if needed):

```env
VITE_API_URL=http://localhost:5000
```

---

## 🔐 Authentication Flow

* Users can **register** or **sign in**
* Passwords are **hashed using bcrypt**
* JWTs are used for secure API access
* Google OAuth handled via Firebase/Auth0/Passport (depending on your setup)

---

## 📝 API Endpoints (Backend)

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/register` | Register a user         |
| POST   | `/api/auth/login`    | Login and return JWT    |
| GET    | `/api/expenses`      | Get all expenses (auth) |
| POST   | `/api/expenses`      | Create a new expense    |
| DELETE | `/api/expenses/:id`  | Delete expense by ID    |

---

## 🧠 Future Improvements

* Add income tracking 💵
* Add charts and analytics 📊
* Export to CSV or PDF 🧾
* Budget limits + notifications 🚨
* Multi-user support for families or teams 👨‍👩‍👧‍👦

---

## 👤 Author

**Seun Ajayi**
🔗 [LinkedIn](https://www.linkedin.com/in/oluwaseun-ajayi-sam/)
📧 Contact: \[seun7674@gmail.com]

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 💬 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any feature suggestions or improvements.
