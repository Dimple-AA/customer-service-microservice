# Customer Service Microservice

This project is part of the Scalable Services assignment for building a microservice-based system.  
The **Customer Service** microservice manages customer records and communicates with external services (mocked in this implementation).  
The project is fully containerized using Docker and deployed into a Kubernetes cluster (Minikube).

📌 GitHub Repository:  
https://github.com/Dimple-AA/customer-service-microservice

---

## 📌 Features

- Full Customer CRUD operations (Create, Read, Update, Delete)
- Bulk upload customer data using CSV
- Connects to mock Account and Notification services
- Stores customer data in MongoDB
- Includes `/health` endpoint for service availability monitoring
- Supports deployment via Docker & Kubernetes

---

## 🏗️ Project Structure

```
customer-service/
│── controllers/
│── models/
│── routes/
│── mock-services/         # Mock Account & Notification services
│── k8s/                   # Kubernetes deployment files
│── Dockerfile
│── docker-compose.yml
│── server.js
│── .env
```

---

## 🔧 Technologies Used

| Component        | Technology             |
| ---------------- | ---------------------- |
| Backend API      | Node.js + Express      |
| Database         | MongoDB                |
| Communication    | REST APIs              |
| Containerization | Docker, Docker Compose |
| Orchestration    | Kubernetes (Minikube)  |
| Language         | JavaScript             |

---

## 🚀 API Endpoints

| Method | Endpoint                 | Description                     |
| ------ | ------------------------ | ------------------------------- |
| GET    | `/customers`             | Retrieve all customers          |
| GET    | `/customers/:id`         | Get customer by ID              |
| POST   | `/customers`             | Create a new customer           |
| PUT    | `/customers/:id`         | Update existing customer        |
| DELETE | `/customers/:id`         | Delete a customer               |
| POST   | `/customers/bulk-upload` | Upload multiple records via CSV |
| GET    | `/health`                | Service health check            |

---

## 🛠️ Run Locally (Without Docker)

```bash
npm install
node server.js
```

Open in browser:

```
http://localhost:3000/customers
```

---

## 🐳 Run Using Docker Compose

```bash
docker-compose up --build
docker ps
```

---

## ☸️ Deploying on Kubernetes (Minikube)

```bash
minikube start
kubectl apply -f k8s/
kubectl get pods
kubectl get svc
minikube ip
```

Access service:

```
http://<minikube-ip>:30080/customers
```

```bash
minikube docker-env
kubectl logs customer-service-765597dd79-pjggn
minikube docker-env
& minikube -p minikube docker-env | Invoke-Expression
docker build -t customer-service:latest
kubectl apply -f k8s/customer-service.yaml
minikube tunnel
```

---

## ❤️ Health Check Endpoint

```bash
GET /health
```

Expected Response:

```json
{ "status": "UP" }
```

---

## 📚 Learnings

- Built microservices with separation of concerns
- Understood containerization via Docker
- Learned how to deploy to Kubernetes using Minikube
- Implemented health checks and logging for observability
- Worked with mock services to enable parallel development

---

## 👤 Author

**Name:** Dimple A A  
**Course:** M.Tech — Scalable Services Assignment
