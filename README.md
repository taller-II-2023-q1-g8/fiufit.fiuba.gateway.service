<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Node.js CI](https://github.com/taller-II-2023-q1-g8/API-Gateway/actions/workflows/node.js.yml/badge.svg)](https://github.com/taller-II-2023-q1-g8/API-Gateway/actions/workflows/node.js.yml)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/taller-II-2023-q1-g8/fiufit.fiuba.app.mobile">
    <img src="https://firebasestorage.googleapis.com/v0/b/fiufit-73a11.appspot.com/o/app.png?alt=media&token=77feb7b5-9fcc-4cd0-aa4a-54236b810170" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">API Gateway</h3>
    Centralized API management
  <p align="center">
    -----
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#implemented-microservices">Implemented Microservices</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Api Gateway developed with Node.js and Express.
It acts as an intermediary between the application itself and the microservices we offer and use, serving as the single entry point for all requests.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
* [![Node.js][Node.js]][Node.js-url]
* [![Express.js][Express.js]][Express.js-url]
* [![Swagger][Swagger]][Swagger-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.
When running locally you will need to setup the following enviorment variables, corresponding to the various URLs needed for the Gateway tu operate properly:
* FIRESTORE_DATABASE_AUTH
* URL_METRICS_AND_GOALS
* URL_NOTIFICATIONS
* URL_PLANS
* URL_SERVICES
* URL_TOKENS
* URL_USERS


### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/taller-II-2023-q1-g8/fiufit.gateway.service
   ```
2. Run App with Node
   ```sh
   node main
   ```
3. This will have the Gateway running on localhost:3000

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- IMPLEMENTED MICROSERVICES -->
## Implemented Microservices

As of now, the Gateway implements the following microservices:

* [Users](https://github.com/taller-II-2023-q1-g8/fiufit.fiuba.user.api): Microservice in charge of the administration and maintenance of the users of the application.
* [Plans](https://github.com/taller-II-2023-q1-g8/fiufit.fiuba.plan.api): Microservice in charge of the logic and arrangement of the plans created and carried out by the users of the application.
* [Goals](https://github.com/taller-II-2023-q1-g8/fiufit.fiuba.goal.api): Microservice in charge of monitoring and progress of users who make plans in the application.
* [Services](https://github.com/taller-II-2023-q1-g8/fiufit.service): Microservice in charge of the administration of the services used in the FiuFit project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Define the project Structure
- [x] Selection of routing criteria
- [x] Redirection of incoming requests
- [x] API-Key Validation Middleware Addition

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Andrés R. Moyano - amoyano@fi.uba.ar    
Franco Papa - fpapa@fi.uba.ar   
Santiago Biach - sbiach@fi.uba.ar

Project Link: [https://github.com/taller-II-2023-q1-g8](https://github.com/taller-II-2023-q1-g8)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[Next-url]: https://nextjs.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Swagger]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white
[Swagger-url]: https://swagger.io/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/https://github.com/github_username/repo_name
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[FastAPI]: https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi
[FastAPI.com]: https://fastapi.tiangolo.com/
[JQuery-url]: https://jquery.com 
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[PostgreSQL]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL.com]:https://www.postgresql.org/
[Firebase]: https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase
[Firebase.com]: https://firebase.google.com/
