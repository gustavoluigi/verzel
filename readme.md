
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

Após a aplicação iniciada, já temos um usuário registrado no banco com os seguintes dados:
- E-mail: usuario@verzel.com.br
- Senha: 1234

Caso deseje cadastrar um novo usuário, basta navegar até a página de cadastro clicando no botão no topo direito da página.

Após feito o login, será redirecionado para a Dashboard, que contém o total de aulas e de módulos cadastrados, e botões para a inserção de novos módulos e aulas.

Ao lado esquerdo temos a barra de navegação do painel administrativo, contendo links para a Dashboard, Listagem de módulos e Listagem de aulas.

Nas páginas de listagem é possível remover e editar o respectivo conteúdo, e também o cadastro de um novo registro.

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
- [x]  Responsividade
- [x]  Figma do projeto: [figma](https://www.figma.com/proto/29b7H0ya4V6uzOctqc6Uxt/Teste-Verzel?page-id=0%3A1&node-id=2%3A112&viewport=241%2C48%2C0.1&scaling=min-zoom)

