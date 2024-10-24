# Pulling the Image from Docker Hub

**Use the following command**

docker pull docma/webohjelmointi2024_demo:backend

**Breakdown of the Command:**

- **docker pull**: This command is used to download an image from a Docker registry in this case, Docker Hub.
- **docma/webohjelmointi2024_demo**: This is the name of the Docker image you want to pull.
- **backend**: This specifies the tag of the image you want to pull. If you omit the tag, Docker will pull the latest tag by default.

### Steps to Run Docker Images

1. **Check the Image Documentation**:

   - Review the documentation for each image to see if there are any specific commands or environment variables required to run them.

2. **Running the Images**:

   - Use the following command to run the backend image:

   docker run -d --name backend -p 5000:5000 docma/webohjelmointi2024_demo:backend

   - To run the frontend image, use:

   docker run -d --name frontend -p 3000:3000 docma/webohjelmointi2024_demo:frontend

3. **Building from Dockerfile if necessary**:

   - If you need to build the images yourself, use this command:

   docker build -t image_name:tag path_to_dockerfile

4. **Using Docker Compose if applicable**:

   - If you have a docker-compose.yml file, you can start everything with the following command:

   docker-compose up -d

### Example Docker Compose File

version: '3'  
services:  
 backend:  
 image: docma/webohjelmointi2024_demo:backend  
 ports:  
 - "5000:5000"

frontend:  
 image: docma/webohjelmointi2024_demo:frontend  
 ports:  
 - "3000:3000"
