# 🚀 Delta User Management System

A full-stack **CRUD (Create, Read, Update, Delete)** web application built using **Node.js, Express.js, EJS, and MySQL**. The project provides a clean and responsive interface for managing user records stored in a MySQL database.

This project was built to practice **Database Management Systems (DBMS)** concepts along with backend development using Express and MySQL.


## ✨ Features

* 🏠 Landing page displaying the total number of registered users
* 👥 View all users stored in the database
* ➕ Add new users
* ✏️ Edit an existing user's username
* 🗑️ Delete users after password verification
* 🔒 Password confirmation before updating or deleting a user
* 💾 MySQL database integration
* 🎨 Responsive handwritten-style user interface
* 🔄 RESTful CRUD operations using Express.js

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* EJS (Embedded JavaScript Templates)

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Packages Used

* express
* mysql2
* ejs
* method-override
* @faker-js/faker

---

## 📂 Project Structure

```
Delta-User-Management/
│
├── public/
│   ├── style.css
│   └── doodle.js
│
├── views/
│   ├── home.ejs
│   ├── showusers.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── delete.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/delta-user-management.git
```

### 2. Navigate into the project

```bash
cd delta-user-management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a MySQL database

```sql
CREATE DATABASE delta_app;
```

Create a table named `user`:

```sql
CREATE TABLE user (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(255),
    password VARCHAR(255)
);
```

### 5. Configure database connection

Update the database credentials inside `index.js`:

```javascript
const connection = mysql.createConnection({
    host: "localhost",
    user: "your_username",
    password: "your_password",
    database: "delta_app"
});
```

### 6. Start the server

```bash
node index.js
```

or

```bash
npm start
```

The application will run at:

```
http://localhost:8080
```

---

## 📌 CRUD Operations

### ➕ Create

* Add a new user
* Store user information in MySQL

### 📖 Read

* Display all registered users
* Show the total number of users on the homepage

### ✏️ Update

* Edit an existing username
* Password verification required before updating

### 🗑️ Delete

* Remove a user from the database
* Password verification required before deletion

---

## 📚 Concepts Practiced

* Express.js Routing
* RESTful APIs
* CRUD Operations
* EJS Templating
* MySQL Database Integration
* SQL Queries
* Express Middleware
* Method Override
* Server-side Rendering
* Form Handling

---

## 🚧 Future Improvements

* Hash passwords using **bcrypt**
* Prevent SQL Injection using prepared statements
* Store credentials using **.env**
* User authentication and login system
* Search users by name or email
* Pagination
* Form validation
* Flash messages
* MVC project structure
* Responsive dark mode
* Deploy the application online

---

## 👨‍💻 Author

**Harsh Raunchela**

* GitHub: https://github.com/harsh-raunchela
* LinkedIn: https://www.linkedin.com/posts/harsh-raunchela_webdevelopment-nodejs-mysql-ugcPost-7488213492659810304-KT4T/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFiYrkUBC8WDHAGmQCw-99Dm7Yp7x1bPHkg

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates future improvements.
