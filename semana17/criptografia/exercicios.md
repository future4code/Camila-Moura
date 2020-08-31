### Exercício 1

a. O rounds é como a lib bcrypt chama os costs. O cost é um fato relacionado a segurança na senha (quanto maior o cost, maior o tempo de execução). Usaremos um cost de número 12, por ser o mais comum. O salt é uma string aleatória colocada na senha antes de criar o hash, para deixá-la mais segura.

### Exercício 2

a. Precisamos alterar o SignUp primeiro, assim teremos usuários cadastrados com a criptografia para depois testar o Login.

d. Ele não precisa ser alterado porque ele já necessita da autorização vinda da header para ser executado. Ou seja, o usuário já precisa estar logado.

### Exercício 3

a. A query usada foi:

```
ALTER TABLE User
ADD COLUMN role ENUM("NORMAL", "ADMIN") NOT NULL DEFAULT "NORMAL";
```
