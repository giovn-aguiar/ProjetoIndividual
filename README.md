# Projeto Individual - SPTech

Bem-vindo ao **UNDERLINE GAME**, plataforma desenvolvida como projeto individual para finalização de semestre na São Paulo Tech School.  Este projeto tem como objetivo integrar conhecimentos de desenvolvimento web, banco de dados e lógica de programação utilizando de um tema pertinente para dizer quem sou, meus valores e princípios.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
ProjetoIndividual/
├── app.js
├── estrutura.txt
├── LICENSE
├── package.json
├── README.md
├── public/
│   ├── cadastro.html
│   ├── index.html
│   ├── login.html
│   ├── simulador.html
│   ├── assets/(imagens armazenadas)
│   ├── css/
│   │   ├── dashboards.css
│   │   ├── estilo.css
│   │   ├── jogo.css
│   │   ├── menu.css
│   │   └── styles.css
│   ├── dashboard/
│   │   ├── dashboard.html
│   │   ├── edicao-aviso.html
│   │   ├── jogo.html
│   │   └── mural.html
├── src/
│   ├── controllers/
│   │   ├── eventoController.js
│   │   ├── kpiController.js
│   │   ├── metricasController.js
│   │   ├── resultadoController.js
│   │   └── usuarioController.js
│   ├── database/
│   │   ├── config.js
│   │   └── script-tabelas.sql
│   ├── models/
│   │   ├── eventosModel.js
│   │   ├── kpiModel.js
│   │   ├── metricasModel.js
│   │   ├── resultadoModel.js
│   │   └── usuariomodel.js
│   └── routes/
│       ├── eventos.js
│       ├── index.js
│       ├── kpi.js
│       ├── metricas.js
│       └── usuarios.js
```

## Funcionalidades

- **Cadastro e Login**: Permite que os usuários se registrem e façam login no sistema.
- **Underline Game**: Um jogo interativo para incentivar os usuários a entenderem mais sobre a história e os princípios da patinação utilizando a habilidade de digitação!
- **Dashboard**: Exibe informações e métricas personalizadas da sua evolução no jogo.
- **Mural de eventos dos usuários**: Espaço para o usuário cadastrado divulgar seu próprio evento de patinação.
- **Mural de eventos fixos**: Mural aberto para usuários cadastrados e não cadastrados, com o objetivo de divulgar eventos fixos semanais de patinação pela cidade.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Configuração do Ambiente

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. **Configure o Banco de Dados**:
   - Crie as tabelas necessárias utilizando o script em `src/database/script-tabelas.sql`.

3. **Configure o Ambiente**:
   - No arquivo `app.js`, defina o ambiente de execução:
     - Para produção: `var ambiente_processo = 'producao';`
     - Para desenvolvimento: `var ambiente_processo = 'desenvolvimento';`
   - Adicione as credenciais do banco de dados nos arquivos `.env` ou `.env.dev`.

4. **Instale as dependências**:
   ```bash
   npm install
   ```

5. **Inicie o servidor**:
   ```bash
   npm start
   ```

6. **Acesse o projeto**:
   - Abra o navegador e acesse o endereço informado no terminal.

7. **Interrompa o servidor**:
   - Pressione `CTRL+C` no terminal.

## Tecnologias Utilizadas

- **Front-end**: HTML, CSS, JavaScript
- **Back-end**: Node.js, Express.js
- **Banco de Dados**: MySQL
- **Bibliotecas**: Chart.js (para gráficos)

## Estrutura de Diretórios

- **public/**: Contém os arquivos HTML e recursos estáticos.
- **src/controllers/**: Lógica de controle para as rotas.
- **src/database/**: Scripts e configurações do banco de dados.
- **src/models/**: Modelos para interação com o banco de dados.
- **src/routes/**: Definição das rotas da aplicação.


## Licença

Este projeto utilizou como base a Web Data Viz, API disponibilizada pela instituição SPTECH para fins acadêmicos.

---