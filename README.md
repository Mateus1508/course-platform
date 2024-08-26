# Projeto Next.js

Bem-vindo ao projeto Course platform! Este README fornece as instruções necessárias para iniciar o projeto e configurar o arquivo de credenciais.

## Índice

-   [Pré-requisitos](#pré-requisitos)
-   [Configuração do Projeto](#configuração-do-projeto)
-   [Executando o Projeto](#executando-o-projeto)
-   [Configuração do `client_secret.json`](#configuração-do-client_secretjson)

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

-   [Node.js](https://nodejs.org/) (versão LTS recomendada)
-   [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## Configuração do Projeto

1. **Clone o Repositório**

    Primeiro, clone o repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```

2. **Instale as Dependências**

    Navegue até o diretório do projeto e instale as dependências necessárias:

    ```bash
    npm install
    ```

    ou, se estiver usando Yarn:

    ```bash
    yarn install
    ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

ou, se estiver usando Yarn:

```bash
yarn dev
```

O projeto estará disponível em `http://localhost:3000` por padrão.

## Configuração do `client_secret.json`

Este projeto requer um arquivo de credenciais para funcionar corretamente. Siga os passos abaixo para configurar o `client_secret.json`:

1. **Crie o Arquivo `client_secret.json`**

    Copie o arquivo `client_secret_example.json` e renomeie-o para `client_secret.json`:

    ```bash
    cp client_secret_example.json client_secret.json
    ```

2. **Preencha o Arquivo `client_secret.json`**

    Abra o arquivo `client_secret.json` e insira suas credenciais. As informações devem ser baseadas no formato e nas chaves do arquivo `client_secret_example.json`.

    **Observação:** Certifique-se de que o arquivo `client_secret.json` esteja corretamente configurado com as credenciais necessárias para o funcionamento do projeto.

