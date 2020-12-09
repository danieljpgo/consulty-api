<h3 align="center" >
 &nbsp;&nbsp; <img
    alt="checklist"
    title="checklist"
    src=".github/logo.png"
    height="140px"
    />
    <div>
      Consulty
    </div>
</h3>

<h1 align="left">Consulty Api</h1>

<p align="left">
   <a href="https://github.com/danieljpgo">
      <img
        alt="author"
        src="https://img.shields.io/badge/author-danieljpgo-1b263b?style=flat&labelColor=2f4858"
      />
   </a>
   <img
      alt="languages"
      src="https://img.shields.io/github/languages/count/danieljpgo/consulty-api?color=1b263b&style=flat&labelColor=2f4858"
   />
   <a href="https://github.com/danieljpgo/consulty-api/graphs/contributors">
      <img
        alt="contributors"
        src="https://img.shields.io/github/stars/danieljpgo/consulty-api?color=1b263b&style=flat&labelColor=2f4858"/>
   </a>
    <a href="https://github.com/danieljpgo/consulty-api/network/members">
      <img
         alt="forks"
         src="https://img.shields.io/github/forks/danieljpgo/consulty-api?color=1b263b&style=flat&labelColor=2f4858"/>
   </a>
     <img alt="License" src="https://img.shields.io/badge/license-MIT-1b263b?style=flat&labelColor=2f4858">
</p>

> A marketplace to find a consultant for your next step. :clipboard:

&nbsp;

<div align="center">
   <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#integrations">Integrations</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#license">License</a>
</div>

<!-- <div align="center">
   <img
      alt="Post Motion"
      title="Post Motion"
      src=".github/web-mobile.gif"
      width="640px" />
</div> -->

## Project
The project is a platform where it is possible to connect consultants to people seeking consultancy, enabling registration as a consultant as well.

## Features
The main features of the project are:
- Create a consultant.
- Create a class for the consultant. 
- Search for classes.
- Total number of contacts created.

## Integrations
This project is part of the **Consulty** system, the other projects are located at:
- [Consulty Web](https://github.com/danieljpgo/consulty-web)
- [Consulty App](https://github.com/danieljpgo/consulty-app)

## Technologies
The main technologies used to develop the project were:
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [SQLite3](https://www.sqlite.org/version3.html)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started
First of all, you may clone this project:
```
git clone https://github.com/danieljpgo/consulty-api.git
```

Use your machine's ip in the config.ts file:
```
const config = {
  port: 3333,
  adress: 'http://192.168.15.8:' // change here
}
```

Run the following scripts in order to execute the application:
```
// install dependencies
yarn install

// database migrations
yarn knex:migrate

// start the application
yarn start
```

## License
This project is under the [MIT license](https://github.com/danieljpgo/consulty-api/blob/master/LICENSE).
<div>Released in 2020.</div>

Make with ❤️ by [Daniel Jorge](https://github.com/danieljpgo)