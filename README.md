# Node.js Web Blog Project

Este projeto é uma aplicação de Blog desenvolvida utilizando Node.js, Express.js e EJS. O objetivo é permitir que os usuários criem, visualizem, editem e excluam postagens de blog. Embora não utilize um banco de dados para persistir os posts, a aplicação oferece uma boa experiência de usuário com um design responsivo para dispositivos desktop e móveis.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework para simplificar o roteamento e gerenciamento de middlewares.
- **EJS**: Motor de template para gerar HTML dinâmico com base no estado da aplicação.
- **HTML/CSS**: Estrutura e estilização do frontend.

## 📋 Requisitos Técnicos

- **Node.js & Express.js**: A aplicação é construída utilizando Node.js com o Express.js, cuidando do roteamento e das funcionalidades de middleware.
- **EJS**: Utilizado para gerar HTML dinâmico e renderizar as páginas com base nas interações dos usuários.

## ⚙️ Funcionalidades

1. **Criação de Posts**: Os usuários podem criar novas postagens diretamente na plataforma.
2. **Visualização de Posts**: A página inicial exibe todos os posts criados pelos usuários.
3. **Edição e Exclusão de Posts**: Os usuários podem editar ou excluir postagens existentes.
4. **Design Responsivo**: A interface do usuário é responsiva e adaptável a diferentes dispositivos (desktop e móveis).

## 🛠️ Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/danlps1/Node.JS-Web-Blog.git
```
### 2. Instalar as dependências
Navegue até a pasta do projeto e instale as dependências necessárias:
```bash
cd Node.JS-Web-Blog
npm install
```
Crie uma pasta chamada "uploads" na pasta "public" do projeto.
```bash
cd /Node.JS-Web-Blog/public
mkdir uploads
```
### 3. Rodar a aplicação
Inicie o servidor:

````bash
cd Node.JS-Web-Blog
node index.js
````
A aplicação estará rodando em http://localhost:3000.
