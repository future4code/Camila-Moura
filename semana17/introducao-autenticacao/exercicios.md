### Exercício 1

a. Acredito que é melhor usar strings do que números, porque com strings há a possibilidade de misturar letras, números e símbolos, o que aumenta as possibilidades de ids.

### Exercício 2

a. O código cria a conexão com a base de dados e depois cria a função responsável por inserir os dados enviados para a base de dados.

b. A query usada foi:

```
CREATE TABLE User (
	user_id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL
);
```

### Exercício 3

a. O "as string" garante que o dado em questão será pego em formato string. Como o token precisa estar em formato de string, essa linha garante que o formato está correto.
