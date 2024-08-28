# Desafio frontend da Best Content AI

Projeto desenvolvido conforme requisitos do desafio para o estágio em desenvolvimento frontend na Best Content AI.

## Contexto

Imagine que você precisa desenvolver uma funcionalidade onde o usuário coloca o site dele e um formulário é automaticamente preenchido com informações específicas da empresa contidas no site.

### Informações Relevantes:
- Todos os sites inseridos para buscar as informações da empresa estão
exclusivamente no site do Reclame Aqui, na página “sobre”, por exemplo:
    - https://www.reclameaqui.com.br/empresa/americanas-marketplace/sobre/
    - https://www.reclameaqui.com.br/empresa/bestcontent-ai/sobre/
    - https://www.reclameaqui.com.br/empresa/shopee/sobre/
- Observe que em cada uma das páginas existem a seção de “Sobre a empresa”,
nela contém o nome da empresa, e o que a empresa faz.
- Algumas empresas contém o número de telefone na seção de Contatos da
empresa.

## Techs obrigatórias

- Front-end em VueJS
- CSS e JS sem bibliotecas
- SVG para icones

## Dicas

- Crie uma conta no scrapingbee https://www.scrapingbee.com/, ele é uma
ferramenta para realizar web scraping e pegar informações de qualquer site na
internet, você utilizará para recuperar as informações das páginas adicionadas
no input de site, dos links citados anteriormente, e preencher os inputs da tela
seguinte.
- No campo de e-mail você pode deixar vazio ou criar alguma lógica
interessantes para criar um e-mail fake para a marca.
- Adicione uma máscara no campo de telefone