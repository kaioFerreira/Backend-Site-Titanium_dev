# Um modelo de projeto NodeJS
Repositório voltado para ensinar e disponibilizar um projeto NodeJS pronto para iniciar o desenvolvimento!<br/>
Que possui uma estrutura de pastas bem definida e integração com banco entre entras configurações.

## Preparando o Ambiente
Para iniar o desenvolvimento em NodeJS é nescessario tem o pacote node em sua maquina.

Ele pode ser encontrado em [NodeJS](https://nodejs.org/en/), que é basicamente o motor do navegador desacoplado para ser executado fora do navegador.

- Para ter mais controle sobre o Node o instale utilizando um gerenciador de pacote, isso facilita futuras atualizações ou alterações até mesmo a remoção do node de sua maquina.

Oque iremos utilizar sera o Chocolatey.

Para instala-lo basta acessar o tutorial de instalação clicando [aqui](https://chocolatey.org/install).

Já com o chocolatey instalado basta digitar *choco install nodejs-lts* ou *cinst nodejs-lts*.

*O '-lts' é para que a versão instalada seja a LTS a versão mais instavel do Node.*

- O Node possui um gerenciador de pacotes proprio que é o **npm** que é utilizado para a instalação de pacotes dentro da nossa aplicação.

Pronto!!!
Agora com o ambiente configurado basta baixar esse repositorio e desenvolver a sua aplicação.

## Pacotes Instalados
- Express, nodemon, Knex, sqlite3 e o CORS.

* ***Express*** é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

* ***Nodemon*** é um utilitário que monitora qualquer alteração na sua fonte e reinicia automaticamente o servidor. Perfeito para a fase de desenvolvimento.

Não se preocupe com ele.

* ***Knex*** realiza a integração com banco de dados deixando uma estrutura flexivel e que é compativel com qualquer bancorelacional, basta instalar seu pacote via npm.

$ npm install pg
$ npm install sqlite3
$ npm install mysql
$ npm install mysql2
$ npm install oracledb
$ npm install mssql

Nesse projeto foi utilizado o sqlite.

* ***CORS*** permite que os servidores especifiquem não apenas quem pode acessar seus ativos, mas também como eles podem ser acessados.

Basicamente serve para restringir quem tera acesso ou não a sua aplicação.
