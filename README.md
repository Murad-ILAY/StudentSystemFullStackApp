# StudentSystemFullStackApp
**1.Explanation for application.properties.example**
The application.properties.example file serves as a template for configuring our application's database connection and Hibernate settings. This file is included in the repository to help developers quickly set up their local environment while keeping sensitive information (such as database credentials) secure.
spring.datasource.url=    => Add your JDBC URL for connecting to the database;
spring.datasource.username=   => Use your database username to authenticate with the database.
spring.datasource.password=   => password of your database.
**How to Use:**
1. Copy the application.properties.example file and rename it to application.properties
2. Update the fields in the application.properties file with your database configuration

**2. About my appication**
This is a full-stack application for managing students. It is developed using **React** for the frontend and **Spring Boot** for the backend. The application provides CRUD operations for managing student information, including name and address.

---

## **Features**
- Add new students.
- List all students.
- Update student information.
- Delete students.

---

## **Technologies Used**
### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: For styling and UI components.

### Backend:
- **Spring Boot**: A Java-based framework for building RESTful APIs.
- **Hibernate**: ORM for managing database interactions.
- **MySQL**: Relational database management system.

**3. To run applicaton follow the instructions**
## **Backend Setup**

1. **Database Configuration:**
   see the first instruction at the begining of the file

2. **Run the Backend Application:**
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Use Maven to run the application:
     ```bash
     mvn spring-boot:run
     ```

3. **API Endpoints:**
   - **POST `/student/add`**: Add a new student.
   - **GET `/student/getAll`**: Retrieve all students.
   - **GET `/student/getById/{id}`**: Retrieve a student by ID.
   - **PUT `/student/updateStudent/{id}`**: Update a student's information.
   - **DELETE `/student/deleteStudent/{id}`**: Delete a student by ID.

     ## **Frontend Setup**

1. **Install Dependencies:**
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install Node.js dependencies:
     ```bash
     npm install
     ```

2. **Run the Frontend Application:**
   - Start the React development server:
     ```bash
     npm start
     ```

3. **Frontend Validation:**
   - Name must be at least 2 characters long.
   - Address must be between 5 and 100 characters.
