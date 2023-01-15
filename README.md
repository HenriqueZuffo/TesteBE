# Início
Para rodar esta aplicação será necessário instalar as dependências, executar as migrations e depois rodar o serviço 

# Instalando as dependências
```bash
$ npm install
```

# Executando migrations
```bash
# Faz o build pois as migrations são executadas apartir do código compilado
$ npm run build

# Executa as migrations
$ npx typeorm migration:run -d dist/database.providers.js
```

# Rodando o serviço
```bash 
# dev com watchmode
$ npm run start:dev

# dev
$ npm run start

```
# Rotas

### /pessoa
### POST
Espera um objeto no body e caso tenha gerado uma pessoa irá retornar o código da mesma
```js
  // Body
  {
    "nome": "string",
    "tipo": integer -> apenas 1 ou 2,
    "data_nascimento": "timestamp(Ex: 01/01/2000)",
    "enderecos": [
      "cep": "string" -> deve conter 9 caracteres,
      "logradouro": "string",
      "numero": integer,
      "bairro": "string",
      "complemento": "string" -> é opcional,
      "cidade": "string",
      "uf": "string" -> deve conter 2 caracteres,
      "tipo": integer -> apenas 1 ou 2
    ]
  }
```

### GET
Retorna todas as pessoas e seus respectivos endereços
```js
[
	{
		"id": integer,
		"nome": "string",
		"identificacao": "string",
		"tipo": integer,
		"data_nascimento": "timestamp",
		"enderecos": [
			{
				"id": integer,
				"cep": "string",
				"logradouro": "string",
				"numero": integer,
				"bairro": "string",
				"complemento": null | "string",
				"cidade": "string",
				"uf": "string",
				"tipo": integer
			}
		]
	}
]
```

### /pessoa/:id
### PUT
Espera receber no body os campos que deverão ser alterados e retorna um status OK caso tenha dado tudo certo.

<p>Vale ressaltar que nenhum dos campos abaixo serão obrigatório o envio, sendo assim no body irá chegar apenas os campos que deverão ser atualizados
</p>

```js
  // Body
  {
    "nome": "string",
    "tipo": integer -> apenas 1 ou 2,
    "data_nascimento": "timestamp(Ex: 01/01/2000)",
    "enderecos": [
      "id": integer -> Caso seja enviado irá atualizar o endereço se não irá criar
      "cep": "string" -> deve conter 9 caracteres,
      "logradouro": "string",
      "numero": integer,
      "bairro": "string",
      "complemento": "string",
      "cidade": "string",
      "uf": "string" -> deve conter 2 caracteres,
      "tipo": integer -> apenas 1 ou 2
    ]
  }
```

### Delete
Não recebe nada no body e retorna um OK caso tenha dado tudo certo

### Get
Não recebe nada no body e retorna a pessoa com seus respectivos endereços
```js
{
  "id": integer,
  "nome": "string",
  "identificacao": "string",
  "tipo": integer,
  "data_nascimento": "timestamp",
  "enderecos": [
    {
      "id": integer,
      "cep": "string",
      "logradouro": "string",
      "numero": integer,
      "bairro": "string",
      "complemento": null | "string",
      "cidade": "string",
      "uf": "string",
      "tipo": integer
    }
  ]
}
```
