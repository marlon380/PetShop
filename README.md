# Site PetShop

<div style="align: center">
  <img src="./pet-shop-frontend/assets/images/pet-shop-logo-150x150.png" />
</div>

#### Este projeto foi criado com o intuito de aprimorar habilidades em desenvolvimento web utilizando uma stack moderna. O objetivo é construir uma aplicação full stack que integre várias tecnologias populares do mercado.

## Tecnologias Utilizadas

### Frontend

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização server-side e geração de sites estáticos.
- **Typescript**: Linguagem de programação que adiciona sintaxe adicional ao JavaScript para oferecer suporte a uma integração mais estreita com seu editor
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e eficiente.

### Backend

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js, utilizado para criar APIs robustas e performáticas.
- **Mongoose**: Biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre o MongoDB e o ambiente de execução JavaScript Node.js.

### Banco de Dados

- **MongoDB Atlas**: Serviço de banco de dados NoSQL baseado em nuvem, usado para armazenar e gerenciar dados.

## Instalação e Configuração

### Pré-requisitos

- Node.js
- npm
- Conta no MongoDB Atlas

### Passos para rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/marlon380/PetShop.git
   ```

2. **Rodando o frontend:**

   - Execute os comandos a seguir:

   ```bash
      cd pet-shop-frontend
      npm install
      npm run dev
   ```

3. **Rodando o backend**
   - Crie uma conta no mongo db atlas
   - Faça conexão com uma database
   - Crie um arquivo .env na raiz do diretório pet-shop-backend com as seguintes informações:
   ```bash
      PORT=3001
      MONGODB_URI=mongodb+srv://<Seu-usuario>:<Sua-senha>@<DataBase>.d2xirzu.mongodb.net/?retryWrites=true&w=majority&appName=<DataBase>
   ```
   - Execute os comandos:
   ```bash
      cd pet-shop-backend
      npm run dev
   ```

#

### Refêrencias

https://gist.github.com/cami-la/c8d5f41f28cc8dccfcb98f4aff055134
