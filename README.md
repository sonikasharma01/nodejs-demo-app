# Node.js App – CI/CD Deployment

## Project Overview
This project is a simple Node.js web application built using Express.js. It uses Docker for containerization and GitHub Actions to automate the deployment process on an AWS EC2 instance.

## Technologies Used
- Node.js
- Express.js
- Docker
- Git & GitHub
- GitHub Actions
- AWS EC2

## Project Structure
```text
nodejs-demo-app/
├── public/
│   └── index.html
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── .github/
    └── workflows/
        └── deploy.yml
```

## Run Locally

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

2. Open the project directory:
   ```bash
   cd nodejs-demo-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open in your browser:
   ```text
   http://localhost:5000
   ```

## Run Using Docker

Build the Docker image:

```bash
docker build -t my-node-app .
```

Run the container:

```bash
docker run -d -p 5000:5000 --name my-node-app my-node-app
```

Access the application at:

```text
http://localhost:5000
```

## CI/CD Pipeline

GitHub Actions automates the deployment whenever code is pushed to the `main` branch.

### Pipeline Workflow

1. Checkout the latest source code.
2. Set up Node.js 22.
3. Install project dependencies using `npm ci`.
4. Connect to the AWS EC2 instance using SSH.
5. Pull the latest code from GitHub.
6. Build a new Docker image on EC2.
7. Stop and remove the old container.
8. Run the updated application.

## AWS EC2 Deployment

The application is deployed on an AWS EC2 instance using Docker.

Access the deployed application using:

```text
http://<EC2-PUBLIC-IP>:5000
```

## GitHub Secrets

The following repository secrets are required for SSH deployment:

- `EC2_HOST` – EC2 public IP address.
- `EC2_USERNAME` – EC2 SSH username.
- `EC2_SSH_KEY` – EC2 private SSH key.

## Conclusion

This project demonstrates basic CI/CD automation using GitHub Actions, Docker containerization, and AWS EC2 deployment. It reduces manual deployment steps by automatically updating the application whenever new code is pushed to GitHub.
