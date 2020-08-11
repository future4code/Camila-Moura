### Exercício 1

a) A resposta da pergunta é: VARCHAR é usado para representar uma string, nessa caso uma string com no máximo 255 caracteres. DATE representa uma data. O último VARCHAR representa uma string de no máximo 6 caracteres.
b) SHOW DATABASES mostrou todas as bases de dados que tenho acesso, no caso, uma. Já o SHOW TABLES mostrou todas as tabelas que tenho acesso, no caso, a tabela recém criada, Actor.
c) DESCRIBE Actor mostrou a tabela criada, mostrando as colunas, os tipos de cada uma delas, se pode ser null e se tem primary key.

### Exercício 2

a. A query usada foi:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002",
"Gloria Pires",
1200000,
"1963-08-23",
"female"
);
```

b. O erro que aparece é "Duplicate entry '001' for key 'PRIMARY'", ou seja, não é aceito PRIMARY KEY duplicada.

c. A contagem de colunas não se encaixa com a contagem de itens passadas.

d. A coluna name não tem valor default, ou seja, ao não passar nada para o banco de dados, ele dá erro.

e. A data foi passada em um valor incorreto, sem as aspas.

### Exercício 3

a. A query usada foi:

```
SELECT * from Actor WHERE gender = "female";

```

b. A query usada foi:

```
SELECT salary from Actor WHERE name = "Tony Ramos";

```

c. A query usada foi:

```
SELECT * from Actor WHERE gender = "invalid";
```

Como não há nenhum dado com gender "invalid", ele retorna uma tabela com dados nulos.

d. A query usada foi:

```
SELECT id, name, salary from Actor WHERE salary < 500000;

```

e. A query não funcionou por não há coluna com o nome "nome". Para corrigir, basta mudar para "name".

### Exercício 4

a. A query seleciona todos os dados da tabela Actor, depois os filtra pelo nome (se começa com a letra A ou termina com J) e tenha um salary maior que 300000.

b. A query usada foi:

```
SELECT * from Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c. A query usada foi:

```
SELECT * from Actor
WHERE name LIKE "%g%" OR "%G%";
```

d. A query usada foi:

```
SELECT * FROM Actor
WHERE
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

a. A query cria uma tabela chamada Movies, que terá as colunas id, name, summary, release_date e evaluation. As colunas id e name são do tipo VARCHAR(255), summary do tipo TEXT, release_date do tipo DATE e evaluation do tipo INT. A id é a PRIMARY KEY.

```
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    summary TEXT NOT NULL,
    release_date DATE NOT NULL,
    evaluation INT NOT NULL
);
```

b., c., d., e.,: A query usada foi:

```
INSERT INTO Movies (id, name, summary, release_date, evaluation)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
),
("002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
),
("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
),
("004",
"O Auto da Compadecida",
"As aventuras dos nordestinos João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora.",
"2000-09-10",
10
);

```

### Exercício 6

a. A query usada foi:

```
SELECT id, name, evaluation FROM Movies WHERE id = "004";
```

b. A query usada foi:

```
SELECT * FROM Movies WHERE name = "Se Eu Fosse Você";
```

c. A query usada foi:

```
SELECT id, name, summary FROM Movies WHERE evaluation >= 7;
```

### Exercício 7

a. A query usada foi:

```
SELECT * FROM Movies WHERE name LIKE "%vida%";
```

b. A query usada foi:

```
SELECT * FROM Movies
WHERE name LIKE "%TERMO DE BUSCA%" OR
     summary LIKE "%TERMO DE BUSCA%";
```

c. A query usada foi:

```
SELECT * FROM Movies WHERE release_date < "2020-08-10";
```

d. A query usada foi:

```
SELECT * FROM Movies WHERE release_date < "2020-08-10" AND (name LIKE "%TERMO DE BUSCA%" OR summary LIKE "%TERMO DE BUSCA%");
```
