```markdown
# 📚 Vocabulary API (Node.js + Express + MongoDB)

This is a simple RESTful API for managing vocabulary words. It allows users to **create**, **read**, **update**, and **delete** words in a MongoDB database.

Built with:
- **Node.js**
- **Express**
- **Mongoose**
- **dotenv**
- **nodemon** (for development)

---

## 🚀 Getting Started

### 📦 Install Dependencies

```bash
npm install
```

### 🧪 Run in Development Mode

```bash
npm run dev
```

> Make sure to create a `.env` file in the root directory with the following content:

```
PORT=7777
MONGO_URI=your_mongodb_connection_string
```

---

## 🌐 API Endpoints

Base URL: `http://localhost:7777/api/vocabulary`

| Method | Endpoint              | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/get-all-words`      | Fetch all vocabulary words   |
| POST   | `/save-word`          | Add a new word               |
| DELETE | `/delete-word/:id`    | Delete a specific word       |
| PUT    | `/edit-word/:id`      | Update an existing word      |

---

## 📂 Project Structure

```
vocabulary-api/
├── config/
│   └── db.js
├── controllers/
│   └── vocabulary.controller.js
├── moduls/
│   └── Vocabulary.js
├── routes/
│   └── vocabularySchema.model.js
├── .env
├── server.js
└── README.md
```

---

## 🧠 Example Word Schema

```js
{
  word: String,
  meaning: String,
  example: String,
  language: String, // Only accepts: 'English', 'German', 'Turkish'
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔧 Dev Dependencies

- **nodemon** – Automatically restarts server during development

To start the server with nodemon:

```bash
npm run dev
```

---

## ✨ Future Improvements

- Add user authentication (JWT)
- Add pagination & search
- Add tags, difficulty levels, or categories
- Connect with React frontend

---

## 👤 Author

Built by [Your Name] – as part of a MERN course project.

---

## 🪪 License

MIT License
```

---
