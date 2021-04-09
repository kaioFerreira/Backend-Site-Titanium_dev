# SISTEMA-TITANIUM-DEV

# Metodologia - DDD (Domain Driven Design)
- Domain Driven Design que são boas práticas a serem utilizadas ao longo do desenvolvimento, onde cada domínio é responsável por uma parte diferente da aplicação.

- Estrutura utilizada para aplicações escalaveis.
- Aplicado também o conceito SOLID.
    -> S — Single Responsiblity Principle (Princípio da responsabilidade única)
    -> L — Liskov Substitution Principle (Princípio da substituição de Liskov)
    -> I — Interface Segregation Principle (Princípio da Segregação da Interface)
    -> D — Dependency Inversion Principle (Princípio da inversão da dependência)

## CONFIG
/config

- Armazena os arquivos de configurações internos da aplicação e variaveis globais.

## MODULES
/modules

- Os Dominios da nossa aplicação são separados por modulos e TODOS mantem a estrutura desenhada abaixo.

### DTOS
/modules/**/dtos

- Padroniza estruturas para transferencias de dados.

### INFRA
/modules/**/infra

- Responsavel pela RN e Modelagem(entidade) do Dominio.

#### HTTP
/modules/**/infra/http

- Responsavel pela RN do Dominio.

##### Controllers
/modules/**/infra/http/controllers

- Recebe a chamada ao End-Point e repassa para um Service realizar a RN.

##### Middlewares
/modules/**/infra/http/middlewares

- Um middleware é uma ferramenta para interceptar uma requisição ele é executado antes da chamada ao End-Point...
- Muito usado por exemplo para autenticação.

##### Routes
/modules/**/infra/http/routes

- Define os End-Points da aplicação, get's e set's...

#### TypeOrm
/modules/**/infra/typeorm

- Responsavel pela modelagem representação do Dominio.

##### Entitites
/modules/**/infra/typeorm/entities

- Responsavel pela representação do Dominio.

##### Repositories
/modules/**/infra/typeorm/repositories

- Responsavel pela IMPLEMENTAÇÃO da regra de modelagem(funções) que o Dominio possui.

### Providers
/modules/**/providers

- São provedores externos, onde não temos total controle sobre a estrutura ou que podem ser alterados para outras ferramentas, então separamos e 'padronizamos' com metodos utilizados.

### Repositories
/modules/**/repositories

- Responsavel pela DECLARAÇÃO da regra de modelagem(funções) que o Dominio possui.

### Services
/modules/**/services

- São os serviços que o Dominio possui.
- As funcionalidades que o Dominio tem em todo o sistema.

### Views
/modules/**/views

- Caso o Dominio tenha controle de alguma interface essa intercafe é desenhada/armazenada nas Views.

## SHARED
/shared

- Toda estrutura que é desacoplada do Dominio e/ou que é compartilhada por mais de um deles é armazenada no shared.

### Container
/shared/container

- Gerencia todo controle de Dependencias dos nossos repositorios.

### Errors
/shared/errors

- É a nossa classe que é responsavel pela captura/padronização e tratamento dos erros da aplicação.

### Infra
/shared/infra

- Responsavel pela RN e Modelagem(entidade) dos Dominios e estruturas compartilhadas.

- Responsavel também pelo agrupamento de todos os Dominios do sistema.

#### Http
/shared/infra/http

- Responsavel pelo agrupamento da RN do sistema.
- Configura arquivos de iniciação do sistema.

##### Routes
/shared/infra/http/routes

- Responsavel pelo agrupamento dos End-Points do sistema.

#### TypeOrm
/shared/infra/http/typeorm

- Responsavel pela modelagem e criação da relação dos Dominios com Estruturas de persistencias de dados.

##### Migrations
/shared/infra/http/typeorm/migrations

- Ligada diretamente a forma de persistencia de dados escolhida.

- As migrations armazenam todo o historico do nosso sistema em relação ao nosso BANCO DE DADOS.
