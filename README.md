# Banco Inter App Clone
Aplicação desenvolvida durante a a semana *front-end* oferecido pelo **banco Inter** junto com a plataforma **Digital Innovation One**, no qual simula transferências usando o **pix**.

## Features
- Realizar *login*;
- Enviar e receber **PIX**;
- Apresentar o Extrato da conta do usuario autenticado;
- Apresentar o salto Atual do usuario autenticado.

## Usage
Antes de mais nada, clone este repositorio:
```
# Clonar o projeto
git clone https://github.com/LeiteSS/inter-clone/

# Entrar no repositorio 
cd inter-clone
```
Para subir os contêineres:
```
# Entrar no back-end
cd inter-api

# Entrar na pasta docker para poder subir o container
cd docker

# Subir o container com o banco de dados (A flag '-d' libera o console) 
docker-compose up -d
```
Para subir o *back-end* - os contêineres do *Docker* deve estarem rodando antes:
```
# Entrar no back-end
cd inter-api

yarn start:dev
```

Para rodar o *front-end*:
```
# Entrar no front-end
cd inter-app

yarn run start
```
## Dependencies
**Dependências** usadas: [**ReactJs**](https://reactjs.org); [**React-Icons**](https://react-icons.github.io/react-icons/); [**TypeORM**](https://typeorm.io/#/); [**Axios**](https://axios-http.com/docs/intro); [**Cors**](https://www.npmjs.com/package/cors); [**Express**](https://expressjs.com); [**js-base64**](https://www.npmjs.com/package/js-base64); [**node-postgres**](https://www.npmjs.com/package/pg); [**CryptoJS**](https://cryptojs.gitbook.io/docs/); [**TypeScript**](https://www.typescriptlang.org); [**date-fns**](https://date-fns.org); [**React Router DOM**](https://www.npmjs.com/package/react-router-dom) e [**Styled Components**](https://styled-components.com).

**Ferramentas** usadas para desenvolver: [**VS Code**](https://code.visualstudio.com); [**Postman**](https://www.postman.com), [**Yarn**](https://yarnpkg.com) e [**Node.js**](https://nodejs.org/en/).

## Testing
Para realizar os teste foi usado o **Postman**[1]. Na pasta **postman** dentro do projeto **inter-api** está a coleção usada para testar a API.
Em suma, a URL usada para logar é a http://localhost:3333/user/signin é o corpo da requisição é este:
```json
{
    "email": "silas@leite.com",
    "password": "mega_senha"
}
```
Se caso não tenha usuario na URL http://localhost:3333/user/signup o corpo da requesição para cadastrar um usuario é este:
```json
{
    "firstName": "Usuario",
    "lastName": "X",
    "wallet": 500.00,
    "email": "x@email.com",
    "password": "1234"
}
```
Em ambos, a resposta da requisição será retornado o *token* de acesso, no qual será usado no cabeçalho(*Request Headers*) das requisições: http://localhost:3333/user/me (retorna todos os dados do usuario autenticado); http://localhost:3333/pix/request [2] (permite que o usuario autenticado gere o codigo PIX ao determinar um valor) e http://localhost:3333/pix/pay/<codigo-gerado> (permite que o usuario autenticado pague usando um determinado codigo gerado). 

---
[1] [Documentação Publicada usando o **Postman**](https://documenter.getpostman.com/view/18725123/UVR4PqL8).

[2] Corpo da requisição para gerar o *token*:
```json
{
  "value": 500
}
```
