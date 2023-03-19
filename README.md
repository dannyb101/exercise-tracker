

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [🏁 Getting Started ](#-getting-started-)
- [🎈 Usage ](#-usage-)
- [🚀 Deployment ](#-deployment-)
- [⛏️ Built Using ](#️-built-using-)
- [✍️ Authors ](#️-authors-)
- [🎉 Acknowledgements ](#-acknowledgements-)

## 🧐 About <a name = "about"></a>

This is an exercise tracker api built with nodejs, express and mongodb. It allows users to log exercises by name, description, duration and date. It also allows users to view their exercise logs and filter by date range.

## 🏁 Getting Started <a name = "getting_started"></a>

To get started, clone the repository and install the dependencies by running:

```npm install```

Then, start the server with nodemon by running:

```npm run dev-start```

The application will be available at http://localhost:3000

The applicaiton also uses a mongodb server. You can either use a local mongodb server or use the free mongodb atlas server. To use the free mongodb atlas server, create a free account at https://www.mongodb.com/cloud/atlas and create a new cluster. Then, create a new user and whitelist your ip address. Finally, create a new database user and copy the connection string. Then, create a .env file in the root directory and add the following line:

```MONGO_URI=<your mongodb connection string>```

## 🎈 Usage <a name="usage"></a>

There are several routes available for this api. The routes are:

- GET /api/users - get all users
- POST /api/users - create a new user
- POST /api/users/:_id/exercises - add an exercise to a user
- GET /api/users/:_id/logs?[from][&to][&limit] - get a user's exercise logs, optionally filtered by date range and limit
- DELETE /api/users/delete - delete all users and data (for testing purposes only)


## 🚀 Deployment <a name = "deployment"></a>

This application is deployed on render at https://exercise-tracker-oxef.onrender.com

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@dannyb101](https://github.com/dannyb101) 

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Shout out to freeCodeCamp for the awesome project idea