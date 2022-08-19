# HomeLabSupervisor 👀

Supervisor software for my Home Lab and Life in general. This repo contains both the front end and backend components to the supervisor.

> Please Note, this is currently under heavy development, so may change. Also, it is currently scoped to serve my personal needs, so may not be generic to be used by the general public.

# 🧑‍💻 Development

There are two components to the repo, the backend server and the frontend user interface.

### 📗 General

This application was developed on a linux PC, but it is not necessary, since the dependencies can be ran on Windows and Mac. It is recommended that if you are developing on Windows, that you instead run on WSL2.

This code base was also developed using VS Code as the IDE, but that is not needed, but highly recommended.

You will need to check out the repo using git cmd or your favorite git GUI:

```bash
git clone https://github.com/bioresestance/HomeLabSupervisor.git
```

You will need the following installed in the development PC:

- Python 3.10
- node.js V16 or greater
- docker
- docker-compose

Please install those softwares as required by your OS.

You will need both the backend and front end development servers and environments setup for the project to function correctly.

### 💻 Backend

The backend is written in python, so you will need the latest version of python installed on the computer running it. The application is written using the Flask library to serve the endpoints.

You will first need to install the dependencies needed by the application, using pip:

```bash
cd backend
pip install -r requirements.txt
```

Next, to start the development server, simple run the following command from the backend folder:

```bash
flask run
```

Flask uses the `.flaskenv` file to define the environment variables needed. By default, it uses the default port and points to the flask_app created in the main.py file.

By default, this will serve the backend on http://localhost:5000. You can test that this is working by going to http://localhost:5000/api/v1/. You should see the following:

```json
{ "ping": "pong" }
```

### 📄 Frontend

The frontend is a Vite + React application written in javascript. In order to run the development server, you will need node.js installed.

First thing is to install the node packages needed:

```bash
cd frontend
npm install
```

Next, to run the development server run the following:

```bash
npm run dev
```

Once the development server is running, it should provide a link to connect to.

# ✨ Production

Instructions to come soon.
