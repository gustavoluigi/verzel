# Verzel - Fullstack JS Challenge - Backend

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
  PATCH /modules/:module_id
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
  PATCH /modules/:module_id/classes
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
  DELETE /modules/:module_id/classes/:class_id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `module_id`      | `number` | **Obrigatório.** ID do módulo |
| `class_id`      | `number` | **Obrigatório.** ID da aula que deseja deletar |
