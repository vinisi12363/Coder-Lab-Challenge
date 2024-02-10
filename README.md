
<h1 align="center">
Vini Fast Food  - Fullstack Challenge
</h1>
<h4 align="center">
Modelo de Fast food fullstack
</h4>
<div align="center">
visualização em TEMPO REAL dos pedidos disponíveis no restaurante! + painel de administração de produtos!
</div>
<br>
<br>

### Como utilizar:

<br>
<br>
1. Quando você abrir o app você poderar visualizar qualquer um dos produtos disponíveis na sessão Produtos, ou por  Categoria! 
<br>

2. Após efetuar o cadastro e login , você obterá acesso ao painel do administrador, que possibilita adicionar, editar ou remover produtos. 
<br>
3. após a eralização das tarefas  a homepage é atualizada instantaneamente com as  suas alterações.

### Tecnologias usadas

**Front-end** _(interface)_**:**
- **[React](https://react.dev/learn)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Sass](https://sass-lang.com/documentation/syntax/structure/)**

  **Back-end** _(servidor)_**:**
- **[Nest JS](https://docs.nestjs.com/)**
- **[Type ORM](https://typeorm.io/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**

<br>
<br>

## Como rodar o projeto

**_Para rodar o projeto ambos Front-end e Back-end devem estar rodando._**

### **Como rodar o back-end**

1. Clone o repositório do back-end:
    ```bash
    git clone https://github.com/vinisi12363/Coder-Lab-Challenge.git
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie o arquivo .env na raiz do projeto e insira as seguintes linhas:
    ```bash
     PG_HOST="kashin.db.elephantsql.com"
    PG_PORT="5432"
    PG_DATABASE="uaqyowxj"
    PG_USER="uaqyowxj"
    PG_PASSWORD="qmhWWgi_c4k5HTlmGKODBgc-zBHoXkAg"
    DATABASE_URL='postgres://uaqyowxj:qmhWWgi_c4k5HTlmGKODBgc-zBHoXkAg@kashin.db.elephantsql.com/uaqyowxj'
    PG_SYNCHRONIZE="true"
    PORT=5000
    ```

4. Rode o projeto em modo de desenvolvimento:
    ```bash
    # development
    npm run start:dev

    ```

### **Como rodar o front-end**

1. Clone o repositório do projeto:
    ```bash
    git clone https://github.com/vinisi12363/Coder-Lab-Challenge.git
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie o arquivo .env na raiz do projeto e insira a seguinte linha:
    ```bash
       REACT_APP_API_URL= http://localhost:5000
       REACT_APP_API_PORT=3000
    ```

4. Rode o projeto em modo de desenvolvimento:
    ```bash
    npm start
    ```

5. Acesse o projeto em:
    ```bash
    http://localhost:3000/
    ```

<br>




