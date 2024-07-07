# Listing Apartments App API

Basic Node/Express API for listing and creating apartments

## Getting Started

To run this app locally you have two options:

## 1. Using [Docker Compose](https://docs.docker.com/compose/) (Recommended)

- **first:** make sure you have [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your machine.

- **Second:** Clone the repo

- **Third:** open you terminal and make sure you are in the project root directory.

- **Forth:** Run the following command:

  ```bash
  docker-compose up --build
  ```

## 2. Using [Node](https://nodejs.org/en) and [mongoDB](https://www.mongodb.com/)

- **first:** make sure you have [Node@20.15.0](https://nodejs.org/en/download/package-manager) and [mongoDB](https://www.mongodb.com/try/download/community) installed on your machine.

- **Second:** Clone the repo

- **Third:** open you terminal and make sure you are in the project root directory.

- **Forth:** Run the following command:

  ```bash
  npm i --legacy-peer-deps
  npm run dev
  ```

## Add apartments

Use the following route to app new apartments

```bash
  http:localhost:8080/apartments
```

Method: POST

example body:

```JSON
{
    "name": "Giza apartment",
    "description": "Apartment located in Dukki, Giza",
    "price": 3000000,
    "size": 140,
    "images": ["https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg"],
    "bedRooms": 2,
    "bathrooms": 1,
}
```
