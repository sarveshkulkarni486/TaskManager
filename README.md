# 📝 Task Manager Application

## Project Description
Task Manager is a web application designed to help users manage their tasks efficiently. Users can log in, create, update, and delete tasks, as well as mark them as completed. The application provides a user-friendly interface for organizing tasks.

## Technologies Used
- **Frontend:**
  - ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  - ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
  - ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  - ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- **Backend:**
  - ![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)
  - ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
- **Database:**
  - ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
- **Authentication:**
  - ![JWT](https://img.shields.io/badge/JWT-000000?logo=JSON%20web%20tokens&logoColor=white)
  - ![bcrypt](https://img.shields.io/badge/bcrypt-4A90E2?logo=)
## Features
- ✅ **Task Management:** Create, update, delete, and mark tasks as completed.
- 🔒 **User Authentication:** Secure login using JSON Web Tokens (JWT) and password hashing with bcrypt.
- 🔄 **Real-Time Updates:** View and manage tasks in real-time without page reloads.
- 📋 **Task Categories:** Organize tasks into categories for better management.

## Installation Instructions
### Prerequisites
- Node.js and npm installed on your system
- MongoDB Atlas account (or local MongoDB installation)

### Steps
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/task-manager.git
   cd task-manager

   cd backend
   npm install
   start with jwt token secret key 'cd models' node generateSecret.js' and copy the generated key and replace the line jwt_secret_key in code and to comeback to backend directory or previous directory in cmd or terminal type the command 'cd ..' 
   optional: You can also start with nodemon if you are interest in it so you can go for it by 'npm install nodemon' and command to run is nodemon server.js
   node server.js

   cd frontend
   npm install
   npm start

**Configure MongoDB**:
Create a MongoDB Atlas cluster or use a local MongoDB installation.
Update the MongoDB URI in the backend configuration (if necessary).

**Open the Application**:
Open a web browser and go to http://localhost:3000 to access the Task Manager application.

**Contributing**
Contributions are welcome! Feel free to submit issues or pull requests to improve the project.
