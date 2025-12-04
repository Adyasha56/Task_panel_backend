# 📋 Task Manager - MERN Stack Application

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring JWT authentication, role-based access control, and complete CRUD operations.

---

## Features

### Authentication & Security
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Secure token handling
- ✅ Input validation and sanitization
- ✅ Protected routes and API endpoints

### Role-Based Access Control
- 👤 **User Role**: Create, view, update own tasks + view admin tasks
- 👑 **Admin Role**: View all tasks, create tasks visible to all users, manage own tasks

### Task Management (CRUD)
- Create tasks with title, description, status, priority, and due date
- View all assigned tasks
- Update task details and status
- Delete own tasks
- Task categorization (pending, in-progress, completed)
- Priority levels (low, medium, high)

### User Experience
- Modern, responsive UI with Tailwind CSS
- Real-time success/error notifications
- Mobile-friendly design
- Secure logout functionality
- Role-specific dashboards

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation

### Frontend
- **React.js** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling framework
- **Context API** - State management

---

## 📁 Project Structure

```
task-manager/
├── backend/
│   ├── config/
│   │   └── db.js                  # Database connection
│   ├── models/
│   │   ├── User.js                # User schema
│   │   └── Task.js                # Task schema
│   ├── controllers/
│   │   ├── authController.js      # Authentication logic
│   │   └── taskController.js      # Task CRUD logic
│   ├── routes/
│   │   ├── auth.js                # Auth routes
│   │   └── tasks.js               # Task routes
│   ├── middleware/
│   │   ├── auth.js                # JWT verification
│   │   └── roleCheck.js           # Role authorization
│   ├── utils/
│   │   └── validators.js          # Input validation rules
│   ├── .env                       # Environment variables
│   ├── server.js                  # Entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx         # Navigation bar
    │   │   ├── PrivateRoute.jsx   # Protected route wrapper
    │   │   └── TaskCard.jsx       # Task display card
    │   ├── pages/
    │   │   ├── Home.jsx           # Landing page
    │   │   ├── Login.jsx          # Login page
    │   │   ├── Register.jsx       # Registration page
    │   │   └── Dashboard.jsx      # Main dashboard
    │   ├── services/
    │   │   ├── authService.js     # Auth API calls
    │   │   └── taskService.js     # Task API calls
    │   ├── context/
    │   │   └── AuthContext.jsx    # Global auth state
    │   ├── utils/
    │   │   └── api.js             # Axios configuration
    │   ├── App.jsx                # Main app component
    │   ├── main.jsx               # Entry point
    │   └── index.css              # Global styles
    ├── tailwind.config.js
    └── package.json
```

---

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

#### 1. Clone the repository
```bash
git clone <https://github.com/Adyasha56/Task_panel_backend>
cd folder
```

#### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

Server will run on `http://localhost:5000`

#### 3. Frontend Setup
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 🔑 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/v1/auth/register` | Register new user | Public |
| POST | `/api/v1/auth/login` | Login user | Public |
| GET | `/api/v1/auth/me` | Get current user | Private |

### Task Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/v1/tasks` | Get all tasks | Private |
| GET | `/api/v1/tasks/:id` | Get single task | Private |
| POST | `/api/v1/tasks` | Create new task | Private |
| PUT | `/api/v1/tasks/:id` | Update task | Private |
| DELETE | `/api/v1/tasks/:id` | Delete task | Private (Owner only) |

---

## Usage Guide

### For Regular Users
1. **Register** with name, email, password (select "User" role)
2. **Login** with credentials
3. **Dashboard** - View your tasks and tasks created by admins
4. **Create Task** - Add new tasks with details
5. **Edit Task** - Update your own tasks
6. **Update Status** - Change status of admin-assigned tasks
7. **Delete** - Remove only your own tasks

### For Admin Users
1. **Register** with "Admin" role
2. **Login** to access admin dashboard
3. **View All Tasks** - See tasks from all users
4. **Create Tasks** - Tasks visible to all users
5. **Manage Tasks** - Edit and delete own tasks
6. **Monitor** - Track task progress across the team

---

## Security Features

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Server-side validation using express-validator
- **Protected Routes**: Middleware-based route protection
- **Role-Based Access**: Granular permissions system
- **HTTP-Only Tokens**: Secure token storage
- **CORS Configuration**: Cross-origin request handling

---

##  Business Logic

### Task Visibility Rules
- **Users** see:
  - Their own tasks
  - Tasks created by any admin
- **Admins** see:
  - All tasks from all users

### Permission Rules
- **Users** can:
  - Create their own tasks
  - Edit/delete their own tasks
  - Update status of admin tasks (cannot delete)
- **Admins** can:
  - Create tasks visible to all
  - Edit any task
  - Delete only their own tasks

---

##  Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
```

---

## Scalability & Future Enhancements

### Current Architecture
- ✅ Modular code structure
- ✅ Separation of concerns
- ✅ RESTful API design
- ✅ Reusable components

### Potential Improvements
-  **Redis Caching**: Cache frequently accessed data
-  **Analytics Dashboard**: Task statistics and insights
-  **Real-time Notifications**: WebSocket integration
-  **Email Notifications**: Task reminders and updates
-  **Docker Deployment**: Containerization for easy deployment
-  **Cloud Storage**: File attachments for tasks
-  **Advanced Search**: Filter and search capabilities
-  **Mobile App**: React Native version
-  **Internationalization**: Multi-language support
-  **Load Balancing**: Handle increased traffic
-  **OAuth Integration**: Google/GitHub login
-  **Audit Logs**: Track all user actions

---

## Troubleshooting

### Common Issues

**MongoDB Connection Error**
```bash
# Make sure MongoDB is running
mongod

# Or check your MONGODB_URI in .env
```

**Port Already in Use**
```bash
# Change PORT in .env file or kill the process
# Windows: netstat -ano | findstr :5000
# Mac/Linux: lsof -i :5000
```

**CORS Issues**
```bash
# Ensure backend CORS is configured correctly
# Check if frontend API baseURL matches backend URL
```

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@Adyasha56](https://github.com/Adyasha56)
- LinkedIn: [Adyasha Nanda](https://www.linkedin.com/in/adyasha-nanda-b4bb2b221)
- Email: nandaadyasha71@gmail.com

---

**⭐ If you found this project helpful, please give it a star!**