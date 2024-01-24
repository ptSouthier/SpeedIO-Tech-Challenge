# Boas vindas ao repositório SpeedIO Tech Challenge!
  
  ## Contexto
  
  Este projeto foi um Teste Técnico recebido no decorrer do processo seletivo da empresa [SpeedIO](https://speedio.com.br/).
  
  O desafio consiste inicialmente em escrever uma <b>aplicação Vue</b> contendo um menu de navegação lateral voltado para Anotações, onde o usuário possa visualizar e interagir com 3 principais telas:
  - Tela vazia, onde não possuímos nenhuma Anotação criada e a opção de criarmos a primeira;
  - Tela de criação, onde acessamos um breve formulário com os inputs necessários para criarmos uma Anotação e dois botões, um para efetuar o descarte do formulário atual, outro para finalizar e salvarmos a Anotação;
  - Tela de listagem de Anotações, onde podemos visualizar as Anotações já criadas, excluir determinada Anotação através do botão de deleção (que por sua vez dispara a abertura do modal de confirmação de exclusão), ou selecionar uma Anotação para obtermos mais informação da mesma no espaço restante da tela do usuário.
  <br><br> Para leitura e armazenamento dos objetos de "Anotação", foi estipulado que as informações fossem armazenadas inicialmente no [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), um Banco de Dados client-side capaz de armazenar diversas estruturas de dados de maneira prática e sem a obrigatoriedade de recursos externos aos disponibilizados pelos navegadores.
  <br><br> Mais abaixo temos as intruções para instalação e execução local do projeto.
  <sub><br> Espero em breve também disponibilizar o link com Deploy da aplicação para melhor visualização e interação com o projeto.
  
  ---
  
  ## Escolhas do projeto e bibliotecas utilizadas no desenvolvimento:
  
  O projeto foi desenvolvido em Vue 3 através do Framework Nuxt em sua versão 3.9.3. Fizeram parte do desenvolvimento também bibliotecas como Quasar para auxílio na criação de componentes e estilização, Typescript e Vue-Tsc como dependências de desenvolvimento para garantir a tipagem e verificação da correta implementação dos tipos no decorrer da implementação e execução.
  
  * [Vue.js](https://vuejs.org/)<br>
  * [Nuxt](https://nuxt.com/)<br>
  * [Quasar](https://nuxt.com/modules/quasar)<br>
  * [Typescript](https://www.typescriptlang.org/)<br>
  * [vue-tsc](https://www.npmjs.com/package/vue-tsc)<br>
  
  ---
  
  ## Instalação do projeto localmente
  
  Após cada um dos passos, haverá um exemplo do comando a ser digitado para executar o que está sendo orientado, caso enfrente qualquer dificuldade e o exemplo não seja suficiente, não hesite em me contatar em _patrick.southier@outlook.com_!
  
  1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir** _nome-do-diretório_:
  ```javascript
    mkdir ptSouthier-code-challenge
  ```
  
  <br><br>
  
  2. Entre no diretório que acabou de criar e depois clone o projeto:
  ```javascript
    cd ptSouthier-code-challenge
    git clone git@github.com:ptSouthier/SpeedIO-Tech-Challenge.git
  ```
  
  <br><br>
  
  3. Agora entre no diretório do projeto clonado e rode o comando **npm install** para instalar as dependências do projeto _(não se preocupe, você poderá excluir tudo depois que utilizar o app)_. 
  ```javascript
    cd SpeedIO-Tech-Challenge
    npm install
  ```
  
  <br><br>
  
  4. Em seguida, basta colocarmos a aplicação Nuxt para rodar para que possamos acessá-la e interagirmos com suas funcionalidades! Após a execução do comando descrito, aguarde o Nuxt te comunicar pelo terminal que a aplicação está pronta para ser acessada em seu navegador pela rota _localhost:3000_, e acesse-a ;)
  ```javascript
    npm run dev
  ```
  
  <br><br>
    
  5. Explore e interaja com a aplicação da maneira que julgar necessário. Redimensione a tela, teste os inputs, abra e feche os menus disponíveis e procure por possíveis bugs, se assim preferir. TODO e qualquer feedback construtivo será sempre bem-vindo!
  
  <br><br>

  
  6. Ao fim, para **REVERTER** o passo anterior e **encerrar** a execução que iniciamos, vamos interromper a execução da aplicação Nuxt.
   * No terminal em que o Nuxt está em execução, aperte as teclas _CTRL + C_.
  
  <br><br>
  
  
  ---
  
  
  ## Futuras Melhorias / Problemas Conhecidos

  * Sincronização das informações salvas no IndexedDB com um Banco de Dados rodando no lado do servidor, garantindo o uso de todos os recursos visuais presentes no projeto.
  * Refatoração da classe IndexedDB, visando garantir modularidade e reaproveitamento eficiente da classe, evitando as funções focadas no atual escopo de projeto.
  * Implementação de Gerenciamento de Estado da Aplicação, de modo a mitigar as atuais práticas ruins presentes no código, como o disparo de eventos emit sequenciais com objetivo de levar a informação até o objetivo final.
  * Documentação detalhada para arquivos e funções em específico, garantindo um maior entendimento de terceiros sob o código desenvolvido e as intenções por trás das implementações.
  * Cobertura de testes.
  
  ---
