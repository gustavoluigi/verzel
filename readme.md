
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
## Funcionalidades

- [x]  Homepage pública e painel administrtivo privado
- [x]  Cadastro de usuários
- [x]  Cadastro, edição e remoção de módulos
- [x]  Cadastro, edição e remoção de aulas
- [x]  Autenticação utilizando JWT


## Documentação da API

### Usuário

- #### Retorna todos os usuários

```http
  GET /users
```
***
- #### Cadastro de usuário

```http
  POST /users
```
##### Corpo da requisição

```json
{
    "name": "Nome do usuário",
	"email": "gustavoluigib@gmail.com",
	"password": "1234"
}
```
| Campo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do usuário |
| `email`      | `string` | **Obrigatório**. E-mail do usuário |
| `password`      | `string` | **Obrigatório**. Senha do usuário |

***

### Módulos

- #### Retorna todos os módulos
```http
  GET /modules
```
***
- #### Cadastro de módulos

```http
  POST /modules
```
##### Corpo da requisição

```json
{
    "name": "Nome do módulo"
}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do módulo |

***

- #### Edição de módulos

```http
  PUT /modules/:module_id
```
##### Corpo da requisição

```json
{
    "field": "Conteúdo"
}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `field`      | `string` | Nome do campo que deseja editar |

***
- #### Deleção de módulos

```http
  DELETE /modules/:module_id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `module_id`      | `number` | **Obrigatório.** ID do módulo que deseja deletar |

***

### Aulas

- #### Retorna todos as aulas
```http
  GET /classes
```
***

- #### Retorna todos as aulas de um módulo
```http
  GET /modules/:module_id/classes
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `module_id`      | `string` | **Obrigatório**. ID do módulo |

***

- #### Cadastro de aulas

```http
  POST /modules/:module_id/classes
```
##### Corpo da requisição

```json
{
	"name": "Nome da aula",
	"date": "10/02/2022"
}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `module_id`      | `string` | **Obrigatório**. ID do módulo |

***

- #### Edição de aulas

```http
  PUT /modules/:module_id/classes
```

##### Corpo da requisição

```json
{
    "field": "Conteúdo"
}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `field`      | `string` | Nome do campo que deseja editar |

- #### Deleção de aulas

```http
  POST /modules/:module_id/classes/:class_id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `module_id`      | `number` | **Obrigatório.** ID do módulo |
| `class_id`      | `number` | **Obrigatório.** ID da aula que deseja deletar |

***
## Primeiros passos

A aplicação