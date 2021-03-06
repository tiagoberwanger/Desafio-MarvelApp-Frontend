# Marvel App - Frontend

### Aplicação frontend para renderizar a visualização dos resultados da aplicação da [Marvel](https://developer.marvel.com/)

# Tabela de Conteúdos

### Features

- [x] Página de login com autenticação.
- [x] Página de registro de novo usuário.
- [x] Homepage com rotas para perfil comics, characters e logout.
- [x] Página de perfil do usuário
- [x] Página de comics favoritados
- [x] Página de characters favoritados
- [x] Página de visualização de todos os comics
- [x] Página de visualização de todos os characteres
- [x] Pesquisa de comics por nome
- [x] Pesquisa de characteres por nome
- [x] Página de detalhes de um comic específico
- [x] Página de detalhes de um character específico
- [x] Opção de favoritar um comic na tela de detalhes
- [x] Opção de favoritar um character na tela de detalhes
- [x] Página 404 não encontrada

# Demonstração da Aplicação

[GIF DA APLICAÇÂO](https://imgur.com/aSAPcwU)

# Pré-requisitos e como rodar a aplicação localmente

## Pré-requisitos

Instalar o [NodeJS](https://nodejs.org/pt-br/download/package-manager/) na sua máquina.

### Clone este repositório
$ git clone <https://github.com/tiagoberwanger/Desafio-Stone-Frontend.git>

### Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-Stone-Frontend/

### Instale as dependências
$ npm install

### Crie um arquivo .env e insira o seguinte conteúdo:
REACT_APP_BASE_URL=http://localhost:3001

### Execute a aplicação 
$ npm start

### O servidor inciará na porta:3000 - acesse <http://localhost:3000>

Caso não queira registrar um novo usuário, é possível usar o usuário teste gerado no backend:  
  email: teste@email.com  
  password: 123456  

# 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Axios](https://github.com/axios/axios)

# Submissão

A submissão desse projeto foi feita no [Heroku](https://heroku.com/), e está pronta pra uso no seguinte [link](https://marvel-app-ft.herokuapp.com/)

# Autor

### Tiago Berwanger
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/lucasgdb)](https://github.com/tiagoberwanger)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas-bittencourt/)](https://www.linkedin.com/in/tiago-berwanger/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:berwangertiago@gmail.com)](mailto:berwangertiago@gmail.com)

# Licença

MIT License

Copyright (c) 2021 Tiago Berwanger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
