<div id="sobre"> 
  <h1>:purple_circle: Projeto Proffy</h1>
  
  <p>
    Projeto realizado durante a 2ª edição do NLW apresentado pela Rocketseat. 
    O projeto consiste em uma plataforma, onde o usuário acessa encontrar uma turma ou para ser uma professor onde alunos podem encontrar e entrar em contato via Whatsapp.
  </p>
  
  <img src="https://welliwillers.github.io/portfolio/img/capaproffy.png" alt="Imagem capa proffy">
</div>


<div id="tabela-de-conteudo"> 
  <h1>:purple_circle: Tabela de conteúdos</h1>
  
  <p align="center">
    <a href="#sobre">Sobre</a> •
    <a href="#tabela-de-conteudo"> Tabela de conteúdo</a> • 
    <a href="#tecnologias-usadas"> Tecnologias usadas</a> • 
    <a href="#features"> Features</a> • 
    <a href="#requisitos"> Requisitos</a> • 
    <a href="#instalacao"> Instalação</a> • 
   <a href="#autor"> Autor</a>
  </p>
</div>


<div id="tecnologias-usadas"> 
  <h1> :purple_circle: Tecnologias usadas</h1>
 </div>
 
- [ReactJS](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/)
* [Expo](https://expo.dev/)
* [Axios](https://axios-http.com/)


<div id="features"> 
  <h1>:purple_circle: Features</h1>
</div>

- [x] 


<div id="requisitos"> 
  <h1>:purple_circle: Requisitos</h1>
</div>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [Visual Studio Code](https://code.visualstudio.com/)

<div id="instalacao"> 
  <h1>:purple_circle: Instalação</h1>
</div>

### Getting Started 🚀

#### :purple_circle: Cloning

```ps
# Clone the repository using git
$ git clone https://github.com/WelliWillers/nlw2.git
```

##### :purple_circle: Web

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd web
$ yarn install
```

>The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in web directory
$ cd web

# Installing depencies
$ yarn add @types/react-router-dom -D
$ yarn add axios
```

To start the server you need the database, to make migrations use the command:

```
$ yarn knex:migrate
```
>The above command is a custom command made on `package.json` file. (Ln 8, Col 5)

##### :purple_circle: Server 

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd server
$ yarn install
```

>The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in server directory
$ cd server

# Installing depencies
$ yarn add @types/cors -D
$ yarn add @types/express -D
$ yarn add ts-node-dev -D
$ yarn add knex
```

##### :purple_circle: Mobile

This projects use third party dependecies and fonts that need to be installed in development, use that command to install all needed dependencies and fonts

```ps
$ cd mobile

# Installing all fonts used
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# Installing all dependencies required
$ yarn install
```
>The above command will install all third party dependencies and fonts used. If you want to install manually all dependencies and fonts used. follow the steps bellow

```ps
# Installing fonts used
$ expo install expo-font @expo-google-fonts/archivo
$ expo install expo-font @expo-google-fonts/poppins

# Installing dependecies required
$ yarn add @react-navigation/native
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
$ yarn add @react-navigation/stack
$ yarn add @react-navigation/bottom-tabs
$ yarn add axios
$ expo install @react-native-community/async-storage
```

#### :purple_circle: Running

To start the Web Server run the command

```ps
# Entering in web directory
$ cd web

# Run the web server
$ yarn start
```

To start the Back Server run the command

```ps
# Entering in Server directory
$ cd server

# Run the Back Server
$ yarn start
```

To run the mobile version run the command

```ps
# Entering in Mobile directory
$ cd mobile

# Run the Mobile Version
$ yarn start
```

<div id="autor"> 
  <h1>:purple_circle: Autor</h1>
</div>

<a href="https://github.com/WelliWillers">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/40187751?s=60&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Wellington Willers</b></sub></a> 🚀

👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-@Wellington-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wellington-willers-24302b199/)](https://www.linkedin.com/in/wellington-willers-24302b199/) 
[![Gmail Badge](https://img.shields.io/badge/-tgmarinho@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wellington.willer@gmail.com)](mailto:wellington.willer@gmail.com)

<div id="licenca"> 
  <h1>:purple_circle: Licença</h1>
</div>
Veja a<a href="https://github.com/WelliWillers/letmeask/blob/main/LICENSE"> LICENSE</a>
