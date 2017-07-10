# Desafio iCasei front-end Developer

Foi inteiramente desenvolvido utilizando AngularJS e Angular Material Design. Para 'rodar' siga os passos seguintes:

1. Certifique-se que tenha NPM instalado na sua máquina.
2. `npm install -g http-server`
3. Na pasta Teste-Front-End faça `npm install`
4. Após baixado dependências faça `http-server -p <port>`
5. O servidor abrirá na porta `<port>` então para acessar: `http://localhost:<port>/`

## Tests Automatizados

Na parte dos testes foi utilizado o [Protractor](http://www.protractortest.org/#/). Como descrito no próprio site, deve-se seguir os seguintes passos:

1. `npm install -g protractor`
2. `webdrive-manager update`
3. `webdrive-manager start`

Vale a pena lembrar que será necessário permissão **SUDO** em alguns casos.

4. Para rodar os tests faça `protractor teste-front-end/test/conf.js`

Vale lembrar que o arquivo `conf.js` está apontando para **localhost:4444** que é o servidor default do Protractor, caso mude de port, por favor mude no `conf.js` também. Outro ponto importante é que os testes estão 'ouvindo' a porta 4051 de aplicação, caso seja possível por favor inicie a aplicação na porta 4051 (**http-server -p 4051**)

# Teste iCasei: Front-End Pleno
Desenvolver uma aplicação HTML5

## Instruções
- Faça um fork desse projeto para a sua conta pessoal do GitHub, ou BitBucket.
- Siga as especificações abaixo.
- Crie um README com as instruções para compilar, testar e rodar o projeto.
- O link do repositório deverá ser enviado para o e-mail frontend@icasei.com.br com o título **Teste FrontEnd Pleno**

## Especificações tecnicas
- Utilizar diretrizes do [Google Material Design](https://www.google.com/design/spec/material-design/introduction.html)
- Utilizar a [API de busca do YouTube](https://developers.google.com/youtube/v3/docs/search/list)
- Mobile first e responsivo
- Usar framework JS (AngularJS, Backbone, Knockout)
- Cores livres, layout livre, imagens livres
- Gitflow
- Testes automatizados

## Especificações funcionais
### Tela Inicial
Essa tela terá um formulário de busca posicionado no meio da tela com campo de texto com placeholder "Pesquisar" e um botão "Buscar". Esse formulário deverá ter validação.

Essa busca deverá chamar a url https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={termo_de_busca}&key={API_KEY}

Ao fazer a busca, o formulário deve ser movido para o topo da tela usando css animate e mostrar a lista de resultados com os campos título, descrição, thumbnail e um link para a página de detalhes.

Essa página deverá ter paginação, utilizando os [recursos de paginação da api](https://developers.google.com/youtube/v3/guides/implementation/pagination?hl=pt-br).

### Tela de detalhes
A partir do videoId retornado na outra chamada, deve ser feito uma chamada para https://www.googleapis.com/youtube/v3/videos?id={VIDEO_ID}&part=snippet,statistics&key={API_KEY}

A partir desse retorno, deve-se montar uma tela contendo embed do video, título, descrição e visualizações.

Essa tela deve ter um botão para voltar para resultados da busca.

## O que será avaliado?
- Organização do projeto
- Lógica do código
- Uso do Git
- Testes automatizados