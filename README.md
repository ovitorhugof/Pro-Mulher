# Pró-Mulher

Site institucional estático da clínica Pró-Mulher, da Dra. Lélia Moreira Toledo, desenvolvido com HTML, CSS e JavaScript puro.

O projeto está preparado para publicação no GitHub Pages e também pode ser publicado futuramente na Vercel.

## 1. Rodar o site localmente

Opção simples: abra o arquivo `index.html` diretamente no navegador.

Opção recomendada para testar como hospedagem estática:

```bash
python -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

Se estiver usando VS Code, a extensão Live Server também funciona bem.

## 2. Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `pro-mulher`.
2. Envie os arquivos do projeto para a branch `main`.
3. No GitHub, acesse `Settings > Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve e aguarde a publicação.

A URL temporária esperada será parecida com:

```text
https://SEU-USUARIO.github.io/pro-mulher/
```

Importante: essa URL temporária está em `sitemap.xml`, `robots.txt`, `index.html` e `pages/politica-privacidade.html`. Altere esses endereços quando o domínio real ou a URL definitiva da Vercel estiverem definidos.

## 3. Publicar na Vercel

1. Crie uma conta ou acesse a Vercel.
2. Clique em `Add New > Project`.
3. Importe o repositório do GitHub.
4. Como o projeto é HTML/CSS/JS puro, não é necessário configurar framework.
5. Deixe o diretório de saída vazio ou como padrão.
6. Publique o projeto.

Após publicar, atualize as URLs de produção em:

- `index.html`: `canonical`, `og:url` e `og:image`.
- `pages/politica-privacidade.html`: `canonical`.
- `robots.txt`: URL do sitemap.
- `sitemap.xml`: URLs das páginas.

## 4. Trocar imagens, logo da clínica e logo da Unimed

Os placeholders estão em `./assets/img`:

- `./assets/img/hero-placeholder.svg`: imagem principal da Home.
- `./assets/img/clinic-placeholder-1.svg`: foto da recepção, fachada ou sala de espera.
- `./assets/img/clinic-placeholder-2.svg`: foto de ambiente interno.

Para trocar, salve as fotos reais em `./assets/img` e atualize os caminhos no `index.html`.

Exemplo:

```html
<img src="./assets/img/foto-clinica.jpg" alt="Recepção da clínica Pró-Mulher" width="540" height="640">
```

### Logo da clínica

No `index.html`, procure os blocos com a classe `brand`. Eles usam temporariamente o marcador `PM`. Substitua por uma imagem da logo oficial, se desejar:

```html
<img src="./assets/img/logo-promulher.png" alt="Pró-Mulher" width="160" height="48">
```

Na página de privacidade, use o caminho relativo a partir da pasta `pages`:

```html
<img src="../assets/img/logo-promulher.png" alt="Pró-Mulher" width="160" height="48">
```

### Logo da Unimed

Na seção `#clinica`, procure o elemento com a classe `unimed-slot` e substitua o texto `Logo Unimed` pela imagem autorizada:

```html
<img src="./assets/img/logo-unimed.png" alt="Unimed" width="132" height="56">
```

## 5. Configurar o formulário de contato

O formulário usa FormSubmit, uma solução simples para sites estáticos:

```html
action="https://formsubmit.co/promulherbe@gmail.com"
```

No primeiro envio real, o FormSubmit enviará uma mensagem para `promulherbe@gmail.com` pedindo confirmação do endereço. Após confirmar, os próximos contatos chegarão normalmente por e-mail.

O formulário já inclui:

- Nome.
- Telefone/WhatsApp.
- E-mail.
- Serviço de interesse.
- Mensagem.
- Validação básica em JavaScript.
- Máscara de telefone brasileiro.
- Feedback visual de envio.

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

## Checklist de publicação Git

```bash
git init
git add .
git commit -m "Primeira versão do site Pró-Mulher"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```
