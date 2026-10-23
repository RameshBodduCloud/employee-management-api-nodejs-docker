# 🚀 Employee Management REST API using Node.js & Docker

![Node.js](https://img.shields.io/badge/Node.js-22-green)
![Express.js](https://img.shields.io/badge/Express.js-REST%20API-blue)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📌 Project Overview

The **Employee Management API** is a simple RESTful web application developed using **Node.js and Express.js**.

This project demonstrates how to build, containerize, and deploy a REST API using **Docker**.

The application allows users to manage employee records through REST API endpoints.

Employee information is stored in a JSON file, making this project ideal for understanding REST APIs, Docker fundamentals, and containerized application deployment.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Backend JavaScript Runtime |
| Express.js | REST API Framework |
| Docker | Application Containerization |
| JSON | Employee Data Storage |
| REST API | Client-Server Communication |
| Git & GitHub | Version Control |

---

## ✨ Features

- ✅ Retrieve all employee records
- ✅ Retrieve employee details by ID
- ✅ Add new employees
- ✅ Delete employee records
- ✅ RESTful API architecture
- ✅ JSON-based employee storage
- ✅ Dockerized Node.js application
- ✅ Lightweight Docker image using Alpine Linux
- ✅ Easy deployment and portability

---

## 📁 Project Structure

```text
employee-api/
│
├── 📄 app.js
│      └── Main Express.js application
│
├── 📄 employees.json
│      └── Employee data storage
│
├── 📄 package.json
│      └── Project dependencies
│
├── 🐳 Dockerfile
│      └── Docker image configuration
│
├── 📄 .dockerignore
│      └── Files excluded from Docker build
│
└── 📖 README.md
       └── Project documentation
```

---

## ⚙️ Prerequisites

Before running this project, ensure the following tools are installed:

- Node.js
- npm
- Docker
- Git

### Verify Installation

```bash
node -v
```

```bash
npm -v
```

```bash
docker --version
```

```bash
git --version
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

Clone the project from GitHub.

```bash
git clone https://github.com/your-username/employee-api.git
```

Navigate to the project directory.

```bash
cd employee-api
```

## 2️⃣ Install Dependencies

Install the required Node.js packages.

```bash
npm install
```

## 3️⃣ Start the Application

Run the Node.js application.

```bash
npm start
```

The application will start on:

🌐 **http://localhost:3000**

---

# 🌐 REST API Endpoints

The application provides the following REST API endpoints.

| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| GET | `/employees` | Retrieve all employees |
| GET | `/employees/:id` | Retrieve employee by ID |
| POST | `/employees` | Add a new employee |
| DELETE | `/employees/:id` | Delete an employee |

---

## 📌 1. Get All Employees

Retrieve all employee records.

**HTTP Method:** `GET`

**Endpoint:**

```http
GET /employees
```

### Example Request

```bash
curl http://localhost:3000/employees
```

### Example Response

```json
[
  {
    "id": 1,
    "name": "Ramesh",
    "department": "DevOps",
    "salary": 70000
  },
  {
    "id": 2,
    "name": "Arjun",
    "department": "AWS",
    "salary": 90000
  }
]
```

---

## 📌 2. Get Employee By ID

Retrieve a specific employee using their ID.

**HTTP Method:** `GET`

**Endpoint:**

```http
GET /employees/:id
```

### Example Request

```bash
curl http://localhost:3000/employees/1
```

### Example Response

```json
{
  "id": 1,
  "name": "Ramesh",
  "department": "DevOps",
  "salary": 70000
}
```

---

## 📌 3. Add New Employee

Add a new employee record.

**HTTP Method:** `POST`

**Endpoint:**

```http
POST /employees
```

### Example Request

```bash
curl -X POST http://localhost:3000/employees \
-H "Content-Type: application/json" \
-d '{
  "name": "Arjun",
  "department": "AWS",
  "salary": 90000
}'
```

### Request Body

```json
{
  "name": "Arjun",
  "department": "AWS",
  "salary": 90000
}
```

---

## 📌 4. Delete Employee

Delete an employee using their ID.

**HTTP Method:** `DELETE`

**Endpoint:**

```http
DELETE /employees/:id
```

### Example Request

```bash
curl -X DELETE http://localhost:3000/employees/1
```

---

# 🐳 Docker Deployment

This application is containerized using Docker.

Docker allows the application to run consistently across different environments without requiring Node.js to be installed directly on the host machine.

---

## 🏗️ Step 1: Build Docker Image

Navigate to the project directory containing the Dockerfile.

Build the Docker image.

```bash
docker build -t employee-api:v1 .
```

### Verify Docker Image

```bash
docker images
```

Example output:

```text
REPOSITORY      TAG       IMAGE ID       SIZE
employee-api    v1        abc123456789   150MB
```

---

## 🚀 Step 2: Run Docker Container

Start the application inside a Docker container.

```bash
docker run -d \
  --name employee-api \
  -p 3000:3000 \
  employee-api:v1
```

### Command Explanation

| Option | Description |
|--------|-------------|
| `docker run` | Creates and starts a container |
| `-d` | Runs container in detached mode |
| `--name` | Assigns a name to the container |
| `-p 3000:3000` | Maps host port 3000 to container port 3000 |
| `employee-api:v1` | Docker image name and tag |

---

## ✅ Step 3: Verify Running Container

```bash
docker ps
```

Example output:

```text
CONTAINER ID   IMAGE             PORTS                    NAMES
abc123456789   employee-api:v1   0.0.0.0:3000->3000/tcp   employee-api
```

---

## 🌐 Step 4: Access the Application

Open your browser and visit:

👉 **http://localhost:3000/employees**

Or test using curl:

```bash
curl http://localhost:3000/employees
```

---

# 🐳 Dockerfile Configuration

The following Dockerfile is used to containerize the Node.js application.

```dockerfile
# Use lightweight Node.js Alpine image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy application source code
COPY . .

# Expose application port
EXPOSE 3000

# Start Node.js application
CMD ["npm", "start"]
```

---

## 📖 Dockerfile Explanation

| Instruction | Description |
|-------------|-------------|
| `FROM node:22-alpine` | Uses lightweight Node.js Alpine Linux image |
| `WORKDIR /app` | Sets the working directory inside the container |
| `COPY package*.json ./` | Copies package dependency files |
| `RUN npm install --omit=dev` | Installs production dependencies |
| `COPY . .` | Copies application source code |
| `EXPOSE 3000` | Documents the application's listening port |
| `CMD ["npm", "start"]` | Starts the Node.js application |

---

# 🛠️ Useful Docker Commands

### View Running Containers

```bash
docker ps
```

### View All Containers

```bash
docker ps -a
```

### View Docker Images

```bash
docker images
```

### View Container Logs

```bash
docker logs employee-api
```

### Follow Container Logs

```bash
docker logs -f employee-api
```

### Access Running Container

```bash
docker exec -it employee-api sh
```

### Stop Container

```bash
docker stop employee-api
```

### Start Container

```bash
docker start employee-api
```

### Restart Container

```bash
docker restart employee-api
```

### Remove Container

```bash
docker rm -f employee-api
```

### Remove Docker Image

```bash
docker rmi employee-api:v1
```

---

# 🔄 Application Workflow

The following diagram illustrates how the Employee Management API works.

```text
              ┌─────────────────────┐
              │                     │
              │   Client / Browser  │
              │                     │
              └──────────┬──────────┘
                         │
                         │ HTTP Request
                         ▼
              ┌─────────────────────┐
              │                     │
              │   Express.js API    │
              │                     │
              └──────────┬──────────┘
                         │
                         │ Process Request
                         ▼
              ┌─────────────────────┐
              │                     │
              │   employees.json    │
              │                     │
              └──────────┬──────────┘
                         │
                         │ Employee Data
                         ▼
              ┌─────────────────────┐
              │                     │
              │    JSON Response    │
              │                     │
              └─────────────────────┘
```

### Workflow Explanation

1. The client sends an HTTP request to the REST API.
2. The Express.js server receives the request.
3. The application processes the request.
4. Employee data is retrieved from or written to `employees.json`.
5. The API returns a JSON response to the client.

---

# 🏗️ Docker Architecture

```text
                 HOST MACHINE
        ┌─────────────────────────────┐
        │                             │
        │       Docker Engine         │
        │                             │
        │  ┌───────────────────────┐  │
        │  │                       │  │
        │  │   Docker Container    │  │
        │  │                       │  │
        │  │   Node.js             │  │
        │  │       +               │  │
        │  │   Express.js          │  │
        │  │       +               │  │
        │  │   employees.json      │  │
        │  │                       │  │
        │  │     Port 3000         │  │
        │  │                       │  │
        │  └───────────────────────┘  │
        │                             │
        └─────────────────────────────┘
                       │
                       │ Port Mapping
                       │ 3000:3000
                       ▼
              http://localhost:3000
```

---

# 📚 Key Learnings

Through this project, I gained hands-on experience with:

- Building REST APIs using Node.js and Express.js
- Implementing CRUD operations
- Working with JSON-based data storage
- Writing Dockerfiles
- Building Docker images
- Running and managing Docker containers
- Understanding Docker port mapping
- Debugging containers using Docker logs
- Deploying Node.js applications using Docker
- Managing application source code using Git and GitHub

---

# 🚀 Future Enhancements

The following improvements are planned for future versions:

- [ ] MongoDB database integration
- [ ] JWT-based authentication
- [ ] Swagger API documentation
- [ ] Docker Compose configuration
- [ ] Kubernetes deployment
- [ ] Jenkins CI/CD pipeline
- [ ] Automated API testing
- [ ] Cloud deployment using AWS
- [ ] Monitoring using Prometheus and Grafana

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

To contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Commit your changes.
5. Push the branch to GitHub.
6. Create a Pull Request.

---

# 👨‍💻 Author

**Ramesh**

☁️ DevOps Enthusiast | Docker | Kubernetes | AWS | Cloud Computing

Passionate about learning DevOps technologies, containerization, cloud infrastructure, and automation.
