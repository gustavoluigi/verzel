
# Verzel - Fullstack JS Challenge

Projeto desenvolvido para o teste utilizando a linguagem `JavaScript`, com `Node JS` para o backend e `React JS` para o frontend.



## Rodando localmente (Docker)

Este repositório permite a execução da aplicação utilizando o Docker. Caso ainda não possua, será necessário instalar os seguintes recursos:
- Instale o [Docker](https://docs.docker.com/engine/install/)

Após feita a instalação, rode o seguinte comando na pasta raiz do repositório

```bash
  docker-compose up -d
```
Após esse processo, a aplicação estará rodando na segunte url:
- <https://localhost:8000>
## Instalação manual

Caso não seja possível iniciar a aplicação utilizando o Docker, podemos também iniciá-la de forma manual:

### Frontend

- Acesse a pasta do frontend:

```bash
cd frontend
```

- Instale as dependências:

```bash
yarn
ou
npm install
```
- De start no projeto:

```bash
yarn start
ou
npm start
```
Após esse processo, o frontend estará rodando na segunte url:
- <https://localhost:8000>

### Backend

- Acesse a pasta do backend:

```bash
cd backend
```

- Instale as dependências:

```bash
yarn
ou
npm install
```
- De start no projeto:

```bash
yarn start
ou
npm start
```
Após esse processo, o backend da aplicação estará rodando na segunte url:
- <https://localhost:3000>

***
## Primeiros passos

A aplicação

***
## Documentação da API

- [Documentação](https://github.com/gustavoluigi/verzel/tree/main/backend)

***
## Funcionalidades

- [x]  Homepage pública e painel administrtivo privado
- [x]  Cadastro de usuários
- [x]  Cadastro, edição e remoção de módulos
- [x]  Cadastro, edição e remoção de aulas
- [x]  Autenticação utilizando JWT
