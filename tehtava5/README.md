# Tehtava5

A Dockerized multi-container application developed as a practice project to understand Docker and Docker Compose. The application includes both backend and frontend services, which are built and managed through Docker Compose and hosted on Docker Hub under the repository `arbengrepi/julkinen`.

## Project Structure

- **Backend**: A Node.js/Express server that provides API endpoints.
- **Frontend**: A client-side application built with javascript, communicating with the backend.

## Requirements

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

## Setup and Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arben-grepi/WebDevelopment2
   cd WebDevelopment2
   cd tehtava5

   ```

2. **Build and Run Containers:**

Use Docker Compose to build and run both the backend and frontend containers:

`docker-compose up -d --build`
