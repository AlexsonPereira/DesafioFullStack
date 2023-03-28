Para rodar o projeto em ambiente local, rode o yarn na raiz do projeto, ao finalizar a instalação das dependencias, rode "yarn dev" e pronto
e a api estara rodando em localmente.


Documentação da API ContactsAPI 

ROTAS QUE NÃO PRECISAM DE AUTENTICAÇÃO Login

POST baseURL/login

  body:{
    "email" : "alex@mail.com",
	 "password" : "123456"
  }
Resposta:

{
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk5Njc0NzYsImV4cCI6MTY4MDA1Mzg3Niwic3ViIjoiOTAzZDA3YTMtYzY2YS00Mjc0LTliODAtMDcxNjQyNjRhYjZjIn0.kf2FXEfIGR2MFvHqj4LmEfAl-KwmpkRuHY2WAPW00yk"
}

Register

POST baseURL/register

  body:{
	"name" : "Alexson",
	"email" : "alexspnpe@mail.com",
	"phone" : "77991900273",
	"password" : "1234"
}
Resposta:

{
	"name": "Alexson",
	"createdAt": "2023-03-28T12:01:38.000Z",
	"phone": "77991900273",
	"email": "alexspnpe@mail.com",
	"id": "cf3aa47d-8221-4195-ad8b-6f6a3f1d4ff6"
}

ROTAS QUE NECESSITAM DE AUTENTICAÇÂO login

Listar seu perfil

PATCH baseURL/users Resposta:

{
	"name": "Alexson",
	"createdAt": "2023-03-23T14:41:37.000Z",
	"phone": "77991900273",
	"email": "alex@mail.com",
}

DELETE baseURL/users Resposta:

**Sem Conteudo, status 204 

==============================================================================================

CONTACTS ROUTES
Todas Rotas de contato necessitam de autenticação

POST baseURL/contact

{
	"name": "AlexsonContact",
	"phone": "77991900291",
	"email": "alexP@mail.com",
}

Resposta:

{
	"id": "cf3aa47d-8221-4195-ad8b-6f6a3f1d4ff6"
	"name": "AlexsonContact",
	"phone": "77991900291",
	"email": "alexP@mail.com",
}

GET baseURL/contact

Resposta:

[
	{
		"id": "cf3aa47d-8221-4195-ad8b-6f6a3f1d4ff6"
		"name": "AlexsonContact",
		"phone": "77991900291",
		"email": "alexP@mail.com",
	},
	{
		"id": "cf3aa47d-8221-4195-ad8b-6f6a3f1d4ff6"
		"name": "AlexsonContact",
		"phone": "77991900291",
		"email": "alexP@mail.com",
	},
	{
		"id": "cf3aa47d-8221-4195-ad8b-6f6a3f1d4ff6"
		"name": "AlexsonContact",
		"phone": "77991900291",
		"email": "alexP@mail.com",
	}
]


PATCH baseURL/contact/:id

{
	"name": "AlexsonContactEdited",
}

Resposta:

{
	"id": "cf3aa47d-8221-4195-ad8b-6f6a3f1d4ff6"
	"name": "AlexsonContactEdited",
	"phone": "77991900291",
	"email": "alexP@mail.com",
}

DELETE baseURL/contact/:id

Resposta:
**Sem Conteudo, 204


