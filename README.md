
# GBE: Shortend of G-BackEnd

- This repo contains 2 simple yet well-structured REST API endpoints. 
- It designed for high scalability and development friendly codebase.
- You can reach running instance with the following link:
  - https://mighty-harbor-96884.herokuapp.com/api-docs


# Usage
1. Install dependencies
```sh 
npm run i
```

2. Create/edit environment variables

- Either `.env.example` file can be editted or new environment file named `.env` can be created
- `DB_URI` env variable **must be set** valid mongodb instance
- `API_VERSION` env variable can be set
- `PORT` env variable can be set


3. Run Locally
```sh 
npm run start:dev
```


# Implementation Details
- For sure **Typescript**
- Directory structure is organised by "package-by-layer" approach
  - I personally would prefer "package-by-feature" which is more suitable for bigger projects
- CI/CD is setup with Github Actions
  - When new push is occured against "develop" branch, it automatically deploys to the **Heroku**
- MVC pattern is applied
  - Controllers: `src/controller`
  - Services: `src/service`
  - Repositories: `src/repository`
  - DAO (Data Access Objects): `src/dao`
  - DTO (Data Transfer Objects): `src/dto`
- Endpoints are documented with **swagger**
  - https://mighty-harbor-96884.herokuapp.com/api-docs
- API versioning is done with environment variable named `API_VERSION`
- Annotation based libraries picked on top of [express.js](https://expressjs.com/) such as:
  - Annotation based routing: [routing-controllers](https://github.com/typestack/routing-controllers)
  - Dependency Injection: [typedi](https://github.com/typestack/typedi)
  - Request and Type Validation: [class-validator](https://github.com/typestack/class-validator)
  - ORM: [typeorm](https://github.com/typeorm/typeorm)
  - Swagger: 
    - Swagger UI: [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
    - Swagger Definition: [routing-controllers-openapi](https://github.com/epiphone/routing-controllers-openapi)
- Endpoints:
  - `[GET] /api/${API_VERSION}/search` retrieves all records in the DB - test purpose
  - `[POST] /api/${API_VERSION}/search` with `FilterDTO` retrieves filtered records in the DB