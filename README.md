**Employee Management API**
A Dockerized Node.js REST API built with Express.js to manage employee records. The application supports basic CRUD operations and demonstrates containerized deployment using Docker.

**Features**
Get all employees
Get employee by ID
Add a new employee
Delete an employee
RESTful API endpoints
Dockerized deployment
JSON-based data storage

**Project Structure**
employee-api/
│
├── app.js
├── employees.json
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md

**Prerequisites**
Make sure the following tools are installed:

Node.js
npm
Docker

Verify installation:

node -v
npm -v
docker --version
Installation
Clone the repository:

git clone https://github.com/your-username/employee-api.git
cd employee-api
Install dependencies:

npm install
Start the application:

npm start
Application will be available at:

http://localhost:3000
API Endpoints
Get All Employees
GET /employees
Example:

curl http://localhost:3000/employees
Response:

[
  {
    "id": 1,
    "name": "Ramesh",
    "department": "DevOps",
    "salary": 70000
  }
]
Get Employee By ID
GET /employees/1
Example:

curl http://localhost:3000/employees/1
Add Employee
POST /employees
Example:

curl -X POST http://localhost:3000/employees \
-H "Content-Type: application/json" \
-d '{
"name":"Arjun",
"department":"AWS",
"salary":90000
}'
Delete Employee
DELETE /employees/1
Example:

curl -X DELETE http://localhost:3000/employees/1
Running with Docker
Build Docker Image
docker build -t employee-api:v1 .
Verify image:

docker images
Run Docker Container
docker run -d \
--name employee-api \
-p 3000:3000 \
employee-api:v1
Verify container:

docker ps
Access Application
http://localhost:3000/employees
Docker Commands
View Logs
docker logs employee-api
Follow Logs
docker logs -f employee-api
Access Container
docker exec -it employee-api sh
Stop Container
docker stop employee-api
Start Container
docker start employee-api
Remove Container
docker rm -f employee-api
Remove Image
docker rmi employee-api:v1
Dockerfile Explanation
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --product*on
COPY . .
EXPOSE 3000*CMD ["npm", "start"]
FROM*
Uses lightweight Node.js Alpine i*age.

WORKDIR
Creates and swi*ches to /app.

COPY package**json
Copies dependency files.

##* RUN npm install

Installs require* dependencies.

COPY . .
Copi*s application source code.

EX*OSE 3000
Documents that the appli*ation listens on port 3000.

C*D
Starts the application when the*container runs.

Workflow *verview
Client Request
  *   |
      v
   Express API
      *
      v
 employees.json
      |
 *    v
Response Returned
*# Future Enhancements

MongoDB I*tegration
JWT Authentication
S*agger API Documentation
Kubernet*s Deployment
Jenkins CI/CD Pipel*ne
Docker Compose Support
*# Author

Ramesh

DevOps | Docker * Kubernetes | Cloud Enthusiast
