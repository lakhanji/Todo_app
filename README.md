# To-Do-List

The To-Do List is a user-friendly web application designed to help individuals efficiently manage their tasks and stay organized. This application allows users to create, update, and delete tasks with ease. Each task includes a title and an optional description, providing clarity and context for better task management

## Features

Task Management: Users can add tasks with a title and optional description, update tasks to reflect changes, and delete completed or unnecessary tasks to keep the list organized.
Responsive User Interface: Interactive and user-friendly UI with a responsive design for seamless use on both desktop and mobile devices.
User Authentication: Secure registration and login with password hashing and JWT-based session management.
Data Persistence: Tasks are securely stored in a database and linked to individual users for persistent access.
Task Organization: Filter tasks based on their status (e.g., completed or pending, edit, and delete ) for efficient task management.

## Screenshots

![Home Page](https://i.ibb.co/19qxDyQ/t1.png)

![SignIn](https://i.ibb.co/Njm3Rb4/t3.png)

![SignUp](https://i.ibb.co/Lx8kFBc/t2.png)

![Todo Form](https://i.ibb.co/jfjxf8t/t4.png)

![Todo List](https://i.ibb.co/0Jv26xh/t5.png)



## Backend API Documentation

### Sign-Up API

- *Endpoint*: /api/auth/SignUp
- *Method*: POST
- *Description*: Creates a new user account with the provided name, email, and password.
- *Parameters*:
-   - name (string): User's chosen name.
  - email (string): User's email address.
  - password (string): User's chosen password.
- *Response*:
  - message (string): Success message or error message if user already exists.

### Sign-In API

- *Endpoint*: /api/auth/SignIn
- *Method*: POST
- *Description*: Allows existing users to log in with their email and password.
- *Parameters*:
  - email (string): User's email address.
  - password (string): User's password.
- *Response*:
  - others (object): User details excluding the password.
  - message (string): Error message if login fails.

### Create Task API

- *Endpoint*: /api/todos/
- *Method*: POST
- *Description*: Adds a new task to the user's to-do list.
- *Parameters*:
  - title (string): Title of the task.
  - body (string): Description of the task.
  - email (string): User's email address.
- *Response*:
  - list (object): Details of the added task.

### Update Task API

- *Endpoint*: /api/todos/updateTask:id
- *Method*: PUT
- *Description*: Updates an existing task in the user's to-do list.
- *Parameters*:
    - title (string): New title for the task.
    - body (string): New description for the task.
    - email (string): User's email address.
- *Response*:
    - message (string): Success message indicating the task was updated.

### Delete Task API

- *Endpoint*: /api/todos/deleteTask/:id
- *Method*: DELETE
- *Description*: Deletes a task from the user's to-do list.
- *Parameters*:
    - id (string): ID of the task to be deleted.
    - email (string): User's email address.
- *Response*:
    - message (string): Success message indicating the task was deleted.

### Get Tasks API

- *Endpoint*: /api/getTask/:id
- *Method*: GET
- *Description*: Retrieves all tasks belonging to a user.
- *Parameters*:
    - id (string): ID of the user whose tasks are to be retrieved.
- *Response*:
    - list (array): Array of task objects belonging to the user.

## Technologies Used

- *Frontend*:
- React.js: Used for building the user interface.
- React Router: Manages routing and navigation within the app.
- React State: For handling authentication, tasks, and editing task states.
- Navigate: Redirects users when authentication is required.
- Header Component: Contains the main navigation bar.
- Axios: Used for making requests to the backend for user authentication and task management.
- CSS: Custom styles for the app's layout and design.

- *Backend*:
- Node.js: For handling server-side logic and asynchronous requests.
- Express.js: A lightweight framework for building APIs and managing HTTP routes.
- MongoDB: NoSQL database used to store user data and tasks.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB, simplifying data interactions.
- bcrypt.js: A library for securely hashing passwords before storing them in the database.
- cors: Middleware for handling cross-origin requests and enabling API access from different domains.
- dotenv: Loads environment variables for configuration, such as database credentials and API keys.

## Getting Started

To run To-Do-List locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone git@github.com:lakhanji/to-do-w3villa.git

2. Navigate to the project directory:
    bash
    cd to-do-w3villa

3. Install dependencies for the frontend and backend:
    ```bash
    cd client
    npm install

    cd server
    npm install

4. Start the frontend server:
    ```bash
    npm run dev

5. Start the backend server:
    ```bash
    npm run server

6. Open your browser and navigate to http://localhost:5173 to access To-Do-List.

## Contact

Feel free to reach out to ljmishra1112002@gmail.com with any questions or feedback!!

## License

This project is open-source and available. Feel free to contribute.
