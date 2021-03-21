<h1 align="center">Práctica Final Nº10 Proyecto: Mu – Sistema eGestión 👋</h1>

<br>

> Frontend of Backend on Node Express egestion

<br>

# Project deployment 📑

This is a small explanation of the final work we delivered for Keepcoding's Full Stack Web Bootcamp IX.

The whole project is supported with the following technologies and running on three different AWS machines.

1. Machine for Front
2. Machine for Back and microservice for sending emails.
3. Database machine

Technologies:

- Firebase
- Cloudinary
- MongoDB
- NodeJs
- Frameworks Back: Express
- Frameworks Front: React (working with Redux) and bootstrap 4
- Github, For version control

<br>

## To get the system up and running you can visit https://www.egestion.xyz/

<br>

### 🏠 [Homepage](https://github.com/anbreaker/react-proyecto-mu)

<br>

## To init simulete project on local first:

```sh
Path: git clone https://github.com/anbreaker/react-proyecto-mu
```

## Install all dependencies (Web Application in React) 💾

```sh
Path:  cd react-proyecto-mu/
npm i
```

<br>

## Install Dependencies of backend egestion 🔧

```sh
Path: git clone https://github.com/sebperezCL/backend-proyecto-mu/tree/dev
```

<br>

## Install all dependencies of backend egestion (Node Express and Mongo) 🔧

```sh
Path:  cd backend-proyecto-mu/
npm i
```

<br>

## To start a initial aplication, is necessary open 2 terminal 🏁

<br>

## 1️⃣ Backend on Node, Express, and Mongo 🔨

<br>

Runs the app in the development mode.\
[http://localhost:5000](http://localhost:5000)

```sh
Path: backend-proyecto-mu/
```

- In order to execute the back it is necessary to follow the following steps:

1. You can copy the **.env.example** to note that you need a Mongo instance (Mongo Atlas for example or a mauqina running Mongo Atlas).

2. In addition, we have used Firebase to follow the following authentication pattern:

- - You will need to configure in the front end the connection file with your firebase account You can see the example configuration in the following file.
    mu-project-d4298-firebase_ExampleConfig.json

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/sebperezCL/backend-proyecto-mu/master/visualPatterns/Opciones_de_autenticacion_-_MU.jpg">
</p>

<br>

Once everything is set up, you can boot into dev mode as follows:

```sh
Path: npm run dev
```

## 2️⃣ Frontend on REACT (first terminal) 🔨

<br>

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```sh
Path: react-proyecto-mu/
```

You will have to configure on the Frontend for the connection to firebase, cloudinary and other services the environment variables, you can look at the **.env.example** file.

Once everything is set up, you can boot into dev mode as follows:

```sh
Path: npm start
```

## To create a production build folder.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

<br>

## 3️⃣ Microservice install dependencies services 🔧

<br>

```sh
Path: git clone https://github.com/LSP-92/email-microservice
```

<br>

# To see an example on youtube (click on the image) 📼

<br>

[![](https://raw.githubusercontent.com/anbreaker/react-proyecto-mu/main/public/img/presentation.jpg)](https://www.youtube.com/watch?v=")

<br><br>

## Authors

👤 **Sebastián Pérez Morales**

- Github: [@sebperezCL](https://github.com/sebperezCL)

👤 **Luis Sánchez Prudencio**

- Github: [@LSP-92](https://github.com/LSP-92)

👤 **Francisco Javier Antúnez Durán**

- Github: [@anbreaker](https://github.com/anbreaker)

## Contac Us

- Website: https://www.egestion.xyz/

- Gmail Talent-Mu: talentmuteam@gmail.com

<br>

## Show your support

Give a ⭐️ if this project helped you!
