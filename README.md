# Sistema de API de Literatura Fantástica

## Descrição

Este projeto consiste em uma **API** especializada na organização de literatura fantástica. A API oferece funcionalidades para gerenciar livros e suas respectivas classificações em **subgêneros** (como fantasia épica, dark fantasy, steampunk, entre outros) e **sagas** (conjuntos de livros que fazem parte de uma história maior). O sistema permite aos usuários pesquisar, adicionar, editar e excluir livros, subgêneros e sagas de maneira fácil e eficiente.

## Funcionalidades

A API proporciona as seguintes funcionalidades:

- **Gerenciamento de Livros**: Permite adicionar, editar, excluir e visualizar livros.
- **Subgêneros**: Organiza livros em subgêneros de literatura fantástica, permitindo a categorização detalhada.
- **Sagas**: Relaciona livros a sagas específicas, para permitir a navegação dentro de grandes histórias e franquias.
- **Filtros de Pesquisa**: Permite a busca por livros por título, autor, subgênero, saga e data de lançamento.

## Tecnologias Utilizadas

- **Node.js** com **Express.js** (para a criação da API)
- **Postman** (para testar a API de forma simples e eficiente)

## Endpoints da API

### 1. Livros

- `GET /livros`  
  Retorna todos os livros cadastrados.

- `POST /livros`  
  Cria um novo livro. Necessário enviar um corpo com os dados do livro.

- `GET /livros/{id}`  
  Retorna os detalhes de um livro específico.

- `PUT /livros/{id}`  
  Atualiza as informações de um livro específico.

- `DELETE /livros/{id}`  
  Exclui um livro do sistema.

### 2. Subgêneros

- `GET /subgeneros`  
  Retorna todos os subgêneros de literatura fantástica.

- `POST /subgeneros`  
  Cria um novo subgênero.

- `GET /subgeneros/{id}`  
  Retorna detalhes de um subgênero específico.

- `PUT /subgeneros/{id}`  
  Atualiza as informações de um subgênero.

- `DELETE /subgeneros/{id}`  
  Exclui um subgênero.

### 3. Sagas

- `GET /sagas`  
  Retorna todas as sagas cadastradas.

- `POST /sagas`  
  Cria uma nova saga.

- `GET /sagas/{id}`  
  Retorna detalhes de uma saga específica.

- `PUT /sagas/{id}`  
  Atualiza as informações de uma saga.

- `DELETE /sagas/{id}`  
  Exclui uma saga.

### 4. Filtros de Pesquisa

- Filtra livros por subgênero e/ou saga.

