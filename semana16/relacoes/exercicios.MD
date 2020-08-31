### Exercício 1

a) A chave estrangeira é usada para conectar o dado daquela tabela com a informação de outra tabela.

b) A query usada foi:

```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
    "Muito engraçado",
    8,
    "001"
);
```

c) A query resulta em erro porque a id não é encontrada na outra tabela.

d) A query usada foi:

```
ALTER TABLE Movies
DROP COLUMN evaluation;
```

e) A query resulta em erro porque não há como apagar uma "linha pai", ou seja, uma linha passa informações para outra tabela.

### Exercício 2

a. Ao criar essa tabela, ela possui duas colunas, cujos dados são ligados com dados das outras duas tabelas (Actor e Movies).

b. A query usada foi:

```
INSERT INTO MovieCast VALUES
('001', '001'), ('001', '002'), ('002', '003'), ('002', '004'),
('003', '005'), ('003', '006'), ('004', '007'), ('004', '004');
```

c. A query resulta em erro porque a id não é encontrada na outra tabela. Ele aponta erro na FOREIGN KEY.

d. A query resulta em erro porque não há como apagar uma "linha pai", ou seja, uma linha que é FOREIGN KEY de outra tabela.

### Exercício 3

a. O operador ON é onde se colocará a condicional que mostrará qual parte das duas tabelas que será comparada.

b. A query usada foi:

```
SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
```

### Exercício 4

a. A query usada foi:

```
SELECT m.name as movie_name, m.id as movie_id, r.rate as rating, r.comment as comment FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
```

b. A query usada foi:

```
SELECT m.name as movie_name, m.id as movie_id, mc.actor_id FROM Movies m
INNER JOIN MovieCast mc ON mc.movie_id = m.id;
```

c. A query usada foi:

```
SELECT AVG(r.rate), m.id, m.name FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

### Exercício 5

a. JOIN precisa aparecer duas vezes para poder fazer mais de uma união entre as tabelas. O primeiro JOIN junto Movie com MovieCast, já o segundo JOIN junta a tabela Actor também

b. A query usada foi:

```
SELECT m.name as movie_name, m.id as movie_id, a.name as actor_name, a.id as actor_id FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c. A query passada possuía um erro, uma vírgula no lugar do ponto no momento de refenciar o título do filme. Ao corrigi-la a query funcionou normalmente

d. A query usada foi:

```
SELECT m.name as movie_name, a.name as actor_name, r.rate, r.comment FROM Movies m
LEFT JOIN Rating r ON r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

### Exercício 6

a. Essa relação é M:N.

b. A query usada foi:

```
CREATE TABLE OscarsAward (
	best_movie VARCHAR(255),
    best_actor VARCHAR(255),
	  movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

c. A query usada foi:

```
INSERT INTO OscarsAward VALUES
('Win', 'Win', '001', '002'), ('Win', 'Win', '002', '003'),
('Win', 'Win', '003', '005'), ('Win', 'Win', '004', '004');
```

d. A query usada foi:

```
SELECT m.name as movie_name, a.name as actor_name, oa.best_movie as bestMovieAward, oa.best_actor as bestActorAward FROM Movies m
LEFT JOIN OscarsAward oa ON oa.movie_id = m.id
JOIN Actor a ON a.id = oa.actor_id;
```
