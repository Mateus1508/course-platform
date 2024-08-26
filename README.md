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

Claro! Aqui está um resumo de como gerar o arquivo de credenciais `client_secret.json` no Google:

---

## Configuração do `client_secret.json`

Este projeto requer um arquivo de credenciais para funcionar corretamente. Siga os passos abaixo para gerar e configurar o `client_secret.json`:

1. **Crie um Projeto no Google Cloud**

    - Acesse o [Google Cloud Console](https://console.cloud.google.com/).
    - Clique em **Select a project** no topo da página e, em seguida, **New Project**.
    - Dê um nome ao projeto e clique em **Create**.

2. **Ative a API Necessária**

    - No menu de navegação do Google Cloud Console, vá para **APIs & Services** > **Library**.
    - Pesquise e selecione a API do YouTube.
    - Clique em **Enable** para ativar a API.

3. **Configure o OAuth Consent Screen**

    - No menu de navegação, vá para **APIs & Services** > **OAuth consent screen**.
    - Selecione **External** e clique em **Create**.
    - Complete as informações obrigatórias e clique em **Save and Continue** até finalizar a configuração.

4. **Crie Credenciais**

    - No menu de navegação, vá para **APIs & Services** > **Credentials**.
    - Clique em **Create Credentials** e selecione **OAuth 2.0 Client IDs**.
    - Escolha **Web application** como tipo de aplicativo.
    - Em **Authorized redirect URIs**, adicione os URIs de redirecionamento necessários (se aplicável).
    - Será necessário configurar esses dois itens exatamente dessa forma.

    ```json
    {
    	"redirect_uris": ["http://localhost:3000/api/auth/callback"],
    	"javascript_origins": ["http://localhost:3000"]
    }
    ```

    - Clique em **Create**.

5. **Baixe o Arquivo de Credenciais**

    - Após criar as credenciais, você verá um popup com o `client_id` e `client_secret`.
    - Clique em **Download** para obter o arquivo JSON. Renomeie-o para `client_secret.json`.

6. **Preencha o Arquivo `client_secret.json`**

    - Abra o arquivo `client_secret.json` e insira as informações conforme as credenciais fornecidas pelo Google.
    - Certifique-se de que o arquivo esteja corretamente configurado com as credenciais necessárias para o funcionamento do projeto.

