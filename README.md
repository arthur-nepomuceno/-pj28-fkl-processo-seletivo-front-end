## <p align = "center">  - FKL - Processo Seletivo - </p>

<p align = "center">
   <img src="https://img.shields.io/badge/autor-Arthur Nepomuceno-093D04?style=flat-square" />
</p>

## Avisos

Para utilizar esta aplicação, certifique-se de ter feito o download e inicializado o back-end na sua máquina local, clicando ([aqui](https://github.com/arthur-nepomuceno/pj28-fkl-processo-seletivo-front-end/blob/master/README.md)). Somente depois de ter seguido esse passo é que você deve esperar que este front-end funcione.

## Sumário
   - [Introdução](#introdução)
   - [Conceitos e Tecnologias](#conceitos-e-tecnologias)
   - [Rodando a aplicação](#rodando-a-aplicação)
   - [Como utilizar](#como-utilizar)

***


## Apresentação
   Este projeto é a interface para uma API que permite o cadastro, a visualização, deleção e edição de informações de empresas. 
   
***

## Introdução
   Este projeto é desenvolvido em React (ViteJS), Bootstrap e typeScript, constituído de três telas:
   - Adição de Cadastros: tela para adicionar um novo cadastro ao sistema.
   - Lista de Cadastros: tela para visualizar todos os cadastros já feitos, com opção de ferramenta de busca.
   - Edição de Cadastro: tela para editar um cadastro.
   
***

## Conceitos e Tecnologias
    - React (ViteJs)
    - TypeScript
    - Bootstrap
    - React-Router-Dom
    - Axios

***

## Rodando a aplicação
Este projeto foi inicializado com o Node Package Manager, então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/arthur-nepomuceno/pj28-fkl-processo-seletivo-front-end.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependências.

```
npm install
```

Finalizado o processo, é só inicializar o servidor.
```
npm run dev
```
###### [voltar para o sumário](#sumário)

***
## Como utilizar

1. Tela de Lista de Cadastros ('/lista-de-cadastros').

1.1 Nesta tela você visualiza automaticamente todos os cadastros já feitos.

1.2 Basta digitar em um dos campos de busca e apertar o botão "Filtrar" para fazer uma busca de acordo com o parâmetro que você escolher. NOTA: é possível buscar por qualquer um dos três parâmetros disponíveis, e apenas um de cada vez.

1.3 Ao clicar em "Incluir", você é redirecionado para a tela de adição de um novo cadastro.

1.4 O ícone da lixeira, presente em casa item da lista, permite que você exclua aquele item.

1.5 O ícone do lápis permite que você acesse a tela de edição de cadastros.

2. Tela de Adição de Cadastros ('/cadastros')

2.1 Nesta tela você pode adicionar um novo registro ao sistema.

2.2 Todos os campos devem ser preenchidos.

2.3 Ao clicar em "Cancelar" você volta para a tela de visualização da lista de cadastros.

2.4 Ao clicar em "Salvar" você adiciona o registro e é redirecionado para a tela de lista, com a lista atualizada incluindo seu novo registro.

3. Tela de Edição de Cadastro.

3.1 Nesta tela você pode conferir e editar toda e qualquer informação do cadastro escolhido para edição.

3.2 Ao clicar em "Cancelar" você volta para a tela de visualização da lista de cadastros.

2.4 Ao clicar em "Editar" você salva sua edição e é redirecionado para a tela da lista, com a lista atualizada, incluindo seu registro editado.

###### [voltar para o sumário](#sumário)
***

