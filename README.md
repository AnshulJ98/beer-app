# 🍺 Beer App - NestJS GraphQL Challenge

This project is a boilerplate for the Beer App challenge, built with NestJS and GraphQL. It includes essential features like user authentication, beer catalog management, and more.

## 🚀 Features

- NestJS with GraphQL (Apollo Server)
- PostgreSQL with TypeORM
- Redis caching
- JWT Authentication
- Role-based Access Control (RBAC)
- Dockerized setup
- CI/CD with GitHub Actions

## 🛠️ Requirements

- Node.js v18.x
- Docker & Docker Compose

## 🏗️ Project Structure

```
beer-app/
├── src/
│   ├── beers/
│   │   ├── beers.module.ts
│   │   ├── beers.service.ts
│   │   ├── beers.resolver.ts
│   │   ├── dto/
│   │   │   ├── create-beer.input.ts
│   │   │   └── update-beer.input.ts
│   │   └── entities/
│   │       └── beer.entity.ts
│   ├── users/
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   │   ├── users.resolver.ts
│   │   ├── dto/
│   │   │   ├── create-user.input.ts
│   │   │   └── login-user.input.ts
│   │   └── entities/
│   │       └── user.entity.ts
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── jwt.strategy.ts
│   │   └── guards/
│   │       └── jwt-auth.guard.ts
│   ├── common/
│   │   ├── decorators/
│   │   │   └── roles.decorator.ts
│   │   └── guards/
│   │       └── roles.guard.ts
│   ├── app.module.ts
│   └── main.ts
├── test/
│   ├── beers.e2e-spec.ts
│   └── users.e2e-spec.ts
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── README.md
├── package.json
├── tsconfig.json
└── .github/
    └── workflows/
        └── ci.yml
```

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd beer-app
```

### 2. Copy environment variables

```bash
cp .env.example .env
```

### 3. Start the application (Docker Compose)

```bash
docker-compose up --build
```

- Access GraphQL Playground: [http://localhost:3000/graphql](http://localhost:3000/graphql)

### 4. Run tests

```bash
npm run test
```

## 🧪 Testing
- Unit and e2e tests are located in the `test/` directory.
- Use `npm run test` to run all tests.

## 🐳 Docker & Services
- **PostgreSQL**: Database for persistent storage
- **Redis**: Caching and session management
- **App**: Main NestJS GraphQL API

## 🔒 Authentication & RBAC
- JWT-based authentication
- Role-based access control using custom decorators and guards

## 🚦 CI/CD
- GitHub Actions workflow for linting, testing, and building the app

## 📄 License
MIT 