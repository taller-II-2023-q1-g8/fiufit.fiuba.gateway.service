[![Node.js CI](https://github.com/taller-II-2023-q1-g8/API-Gateway/actions/workflows/node.js.yml/badge.svg)](https://github.com/taller-II-2023-q1-g8/API-Gateway/actions/workflows/node.js.yml)
# Fiu-Fit API Gateway

## Intro
Api Gateway desarrolada con Node.js y Express. 	
Actúa de intermediario entre la aplicación en sí y los microservicios que ofrecemos y usamos, funcionando como único punto de entrada para todas las solicitudes.

## Requisitos
* Node 18.15.0
* Docker

## Ejecución
Con el directorio root como CWD:
> docker-compose up --build

## Microservicios
Actualmente, esta gateway incorpora los siguientes microservicios:

* [Usuarios](https://github.com/taller-II-2023-q1-g8/fiufit.fiuba.user.api): Microservicio encargado de la administración y mantenimiento de los usuarios de la aplicación.
* [Planes](https://github.com/taller-II-2023-q1-g8/fiufit.fiuba.plan.api): Microservicio encargado de la lógica y disposición de los planes creados y realizados por los usuarios de la aplicación.
* [Metas y Métricas](https://github.com/taller-II-2023-q1-g8/fiufit.fiuba.goal.api): Microservicio encargado del seguimiento y progreso de los usuarios que realizan planes en la aplicación.
