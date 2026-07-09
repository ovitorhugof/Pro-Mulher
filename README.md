# Pró-Mulher

Site institucional estático da clínica Pró-Mulher, da Dra. Lélia Moreira Toledo, desenvolvido com HTML, CSS e JavaScript puro.

## Como abrir o projeto

Abra o arquivo `index.html` diretamente no navegador. O site não depende de backend, banco de dados, frameworks ou processo de build.

Para uma simulação mais próxima de hospedagem, também é possível servir a pasta com um servidor estático simples, por exemplo:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Estrutura de pastas

```text
assets/
  icons/
  img/
css/
  style.css
js/
  main.js
pages/
  politica-privacidade.html
index.html
robots.txt
sitemap.xml
README.md
```

## Onde trocar imagens

Os placeholders estão em `assets/img`:

- `hero-placeholder.svg`: imagem principal da Home.
- `clinic-placeholder-1.svg`: foto da recepção ou fachada.
- `clinic-placeholder-2.svg`: foto de ambiente interno.

Substitua pelos arquivos reais da clínica e atualize os caminhos no `index.html`, se os nomes forem diferentes.

## Onde inserir a logomarca

No `index.html`, procure pelos blocos com a classe `brand`. Eles usam um marcador temporário com as letras `PM`. Troque esse bloco por uma tag `img` com a logomarca oficial, por exemplo:

```html
<img src="assets/img/logo-promulher.png" alt="Pró-Mulher" width="160" height="48">
```

Inclua a imagem em `assets/img`.

## Onde inserir a logo da Unimed

Na seção `#clinica`, procure pelo elemento com a classe `unimed-slot`. Substitua o texto `Logo Unimed` pela imagem autorizada:

```html
<img src="assets/img/logo-unimed.png" alt="Unimed" width="132" height="56">
```

## Como configurar o envio do formulário

O formulário usa FormSubmit, uma solução simples para sites estáticos:

```html
action="https://formsubmit.co/promulherbe@gmail.com"
```

No primeiro envio real, o FormSubmit enviará uma mensagem para `promulherbe@gmail.com` pedindo confirmação do endereço. Após confirmar, os próximos contatos chegarão normalmente por e-mail.

Campos já implementados:

- Nome.
- Telefone/WhatsApp.
- E-mail.
- Serviço de interesse.
- Mensagem.

O JavaScript faz validação básica, máscara de telefone brasileiro e feedback visual antes do envio.

## Publicação futura

O site pode ser publicado em qualquer hospedagem estática, como Vercel, Netlify, GitHub Pages ou hospedagem tradicional. Antes de publicar:

- Atualize o domínio final em `index.html`, `robots.txt` e `sitemap.xml`.
- Troque os placeholders por fotos reais.
- Insira as logos oficiais.
- Gere uma imagem Open Graph em JPG ou PNG e atualize a tag `og:image`.
- Teste o formulário após confirmar o e-mail no FormSubmit.

## SEO local

O projeto já inclui title, description, keywords, Open Graph, canonical, dados estruturados Schema.org, `robots.txt` e `sitemap.xml`, com foco em termos como ginecologista em Boa Esperança MG, clínica ginecológica, ultrassonografia e exames preventivos.
