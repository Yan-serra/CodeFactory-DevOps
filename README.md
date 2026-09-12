 # CodeFactory DevOps

 ## DESCRIÇÃO

Projeto desenvolvido para demonstrar  aplicação de práticas DevOps na empresa fictícia CodeFactory Solutions. Durante o desenvolvimento do projeto ele passou por uma mudança de tecnologia, saindo do Python para uma aplicação Web ultilizando JavaScript, HTML e CSS.

 ## OBJETIVO

Demonstrar práticas de versionamento, colaboração, documentação, containerização e Integração Contínua.

 ## TECNOLOGIAS ULTILIZADAS

- HTML
- CSS
- JavaScript
- Git
- GitHub
- Docker
- Jenkins

 ## ESTRUTURA DO PROJETO
```text
CodeFactory-DevOps/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── index.html
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── .dockerignore
├── .gitignore
└── README.md
```

 ## INSTALAÇÃO

Para utilizar o projeto em sua máquina, primeiro clone o repositório:

```bash
git clone https://github.com/Yan-serra/CodeFactory-DevOps.git
```

Depois, acesse a pasta do projeto:

```bash
cd CodeFactory-DevOps
```

Como a aplicação utiliza HTML, CSS e JavaScript, não é necessário instalar dependências para executar a aplicação diretamente pelo navegador.

Para utilizar a versão containerizada, é necessário possuir o Docker instalado.

## EXECUÇÃO DO PROJETO

### Execução pelo navegador

Para executar a aplicação localmente, abra o arquivo:

```text
index.html
```

em um navegador de sua preferência.

Também é possível utilizar a extensão Live Server no VS Code.

### Execução utilizando Docker

Para construir e iniciar o projeto utilizando Docker Compose, execute:

```bash
docker compose up --build
```

A aplicação ficará disponível na porta configurada no arquivo `docker-compose.yml`.

Para encerrar os containers, execute:

```bash
docker compose down
```

## DOCKER

O Docker foi utilizado para criar um ambiente padronizado para a execução da aplicação. A utilização de containers ajuda a reduzir diferenças entre os ambientes dos integrantes da equipe e facilita na execução da aplicação de forma semelhante em diferentes computadores.

Os principais arquivos utilizados são:

- `Dockerfile` ==> responsável pela criação da imagem da aplicação.
- `docker-compose.yml` ==> responsável pela configuração e execução do container.
- `.dockerignore` ==> evita que arquivos desnecessários sejam enviados durante a criação da imagem.

## INTEGRAÇÃO CONTÍNUA

O projeto utiliza o Jenkins para automatizar etapas do processo de Integração Contínua.

A configuração da pipeline está armazenada no arquivo:

```text
Jenkinsfile
```

A pipeline realiza etapas como:

==> download do código do repositório;
==> validação da estrutura do projeto;
==> construção da aplicação utilizando Docker;
==> inicialização dos containers;
==> verificação da execução da aplicação;
==> finalização dos containers após a execução da pipeline.

## VERSIONAMENTO

O projeto utiliza Git e GitHub para controle de versão.

As alterações são realizadas em branches separadas e posteriormente enviadas através de Pull Requests para a branch de desenvolvimento.

O fluxo utilizado no projeto segue a estrutura:

```text
Branch do integrante
        ↓
Alterações
        ↓
Commit
        ↓
Push
        ↓
Pull Request
        ↓
Revisão
        ↓
Merge em Desenvolvimento
        ↓
Verificações
        ↓
Merge em main
```

## BRANCHES

Entre as branches utilizadas no projeto estão:

- `main` ==> versão principal do projeto.
- `Desenvolvimento` ==> integração das alterações antes da versão principal.
- `feature-Documentacao` ==> alterações relacionadas à documentação.
- `feature-Melhorias-testes` ==> melhorias e testes da aplicação.
- `feature-docker-compose` ==> configuração da containerização.
- `feature-Ci-jenkins` ==> configuração da Integração Contínua.
- `feature-Migracao-js` ==> migração da aplicação de Python para HTML, CSS e JavaScript.

## COLABORAÇÃO

Cada integrante trabalha em sua própria branch fazendo seus commits. As alterações são enviadas através de Pull Requests e passam por revisão antes de serem integradas à branch `Desenvolvimento`. Esse processo permite acompanhar o histórico de alterações, autoria dos commits e participação dos integrantes.

## LICENÇA

Este projeto foi desenvolvido exclusivamente para fins acadêmicos na disciplina de DevOps e Integração Contínua.


 Equipe

- Yan Kevin dos Santos Serra
- Marcio Allyson Rios de Souza
- Diego Gin
- Eduarda Lucena Nunes