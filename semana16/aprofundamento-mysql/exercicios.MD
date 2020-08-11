### Exercício 1

a) A query vai retirar a coluna salary da tabela.
b) Irá alterar a coluna gender para que ela mude de tipo e fique com VARCHAR(6)
c) Irá alterar a coluna gender para que ela mude de tipo e aceite mais caracteres, no caso, 255
d) A query usada foi:

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a. A query usada foi:

```
UPDATE Actor
SET name = "Carolina Dieckmann",
birth_date = "1979-09-16"
WHERE id = "003";
```

b. As queries usadas foram:

```
UPDATE Actor
SET name = "Antônio Fagundes"
WHERE name = "Antonio Fagundes";

```

```
UPDATE Actor
SET name = "Antonio Fagundes"
WHERE name = "Antônio Fagundes";

```

c. A query usada foi:

```
UPDATE Actor
SET name = "Juliana Paes",
salary = "300000",
birth_date = "1979-03-26",
gender = "female",
hometown = "Rio Bonito"
WHERE id = "005";
```

d. O MySQL não deu erro ao tentar atualizar um id inválido, porém mostrou que nenhuma linha foi alterada

### Exercício 3

a. A query usada foi:

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b. A query usada foi:

```
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a. A query usada foi:

```
SELECT MAX(salary) FROM Actor;
```

b. A query usada foi:

```
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
```

c. A query usada foi:

```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d. A query usada foi:

```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a. A query retorna a contagem de atrizes e atores dividido por gênero.

b. A query usada foi.

```
SELECT id FROM Actor
ORDER BY name DESC;
```

c. A query usada foi.

```
SELECT * FROM Actor
ORDER BY salary ASC;
```

d. A query usada foi.

```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e. A query usada foi.

```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6

a. A query usada foi:

```
ALTER TABLE Movies
ADD playing_limit_date DATE;
```

b. A query usada foi:

```
ALTER TABLE Movies CHANGE evaluation evaluation FLOAT;
```

c. A query usada foi:

```
UPDATE Movies
SET playing_limit_date = "2020-01-12"
WHERE id = "001";
```

e

```
UPDATE Movies
SET playing_limit_date = "2020-10-24"
WHERE id = "002";
```

d. As queries usadas foram:

```
DELETE FROM Movies WHERE id = "003";
```

e

```
UPDATE Movies
SET summary = "Nova sinopse"
WHERE id = "003";
```

O MySQL não apontou erro, mas disse que 0 linhas foram afetadas.

### Exercício 7

a. A query usada foi:

```
SELECT COUNT(*) FROM Movies WHERE evaluation > 7.5;
```

b. A query usada foi:

```
SELECT AVG(evaluation) FROM Movies;
```

c. A query usada foi:

```
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
```

d. A query usada foi:

```
SELECT COUNT(*) FROM Movies WHERE release_date < CURDATE();
```

e. A query usada foi:

```
SELECT MAX(evaluation) FROM Movies;
```

f. A query usada foi:

```
SELECT MIN(evaluation) FROM Movies;
```

### Exercício 8

a. A query usada foi:

```
SELECT * FROM Movies
ORDER BY name ASC;
```

b. A query usada foi:

```
SELECT * FROM Movies
ORDER BY name DESC
LIMIT 5;
```

c. A query usada foi:

```
SELECT * FROM Movies
ORDER BY release_date < CURDATE()
LIMIT 3;
```

d. A query usada foi:

```
SELECT * FROM Movies
ORDER BY evaluation DESC
LIMIT 3;
```
