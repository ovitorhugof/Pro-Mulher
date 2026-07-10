# Dra. Lélia Moreira Toledo

Site institucional estático da Dra. Lélia Moreira Toledo, ginecologista em Boa Esperança MG, desenvolvido com HTML, CSS e JavaScript puro.

O projeto está preparado para publicação no GitHub Pages e também pode ser publicado futuramente na Vercel. Não há dependências externas de build.

## Rodar localmente

Opção simples: abra o arquivo `index.html` diretamente no navegador.

Opção recomendada para testar como hospedagem estática:

```bash
python -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

## Publicar

Para GitHub Pages, envie os arquivos para a branch configurada e publique a pasta raiz do repositório. A URL temporária esperada será parecida com:

```text
https://SEU-USUARIO.github.io/pro-mulher/
```

Após publicar em domínio definitivo ou na Vercel, atualize:

- `index.html`: `canonical`, `og:url` e a futura `og:image` quando `assets/img/og-pro-mulher.jpg` existir.
- `pages/politica-privacidade.html`: `canonical`.
- `robots.txt`: URL do sitemap.
- `sitemap.xml`: URLs das páginas.

## Identidade visual

A logomarca principal fica em `assets/img/logo-pro-mulher.png` e deve manter esse caminho para não quebrar as referências do site. Ela deve preservar proporção, cores douradas, transparência real e otimização para web.

O favicon atual usa o monograma `LM` e fica em:

```text
assets/icons/favicon-lm.svg
```

O ícone compacto legado `assets/icons/favicon.svg` também foi atualizado para `LM`, mas as páginas usam `favicon-lm.svg`.

O ícone do WhatsApp fica em:

```text
assets/icons/whatsapp.svg
```

Ele não possui fundo próprio; a cor é herdada via `currentColor`, e o fundo verde pertence ao botão flutuante.

O ícone do Instagram fica em:

```text
assets/icons/instagram.svg
```

O perfil oficial exibido no site é `@lelia.m.toledo`.

Para compartilhamento em WhatsApp, Facebook e outras redes, crie futuramente uma imagem em `assets/img/og-pro-mulher.jpg`, com aproximadamente 1200 x 630 pixels. Não use diretamente a logomarca horizontal como imagem principal de compartilhamento se ela não tiver proporção adequada.

Navegadores costumam armazenar favicon em cache. Se a troca não aparecer imediatamente, atualize com `Ctrl + F5`, abra em aba anônima, limpe o cache do navegador, teste a URL direta do favicon e aguarde a atualização do GitHub Pages.

## Imagens

Os placeholders estão em `assets/img`:

- `hero-placeholder.svg`: imagem principal da Home.
- `clinic-placeholder-1.svg`: foto da recepção, fachada ou sala de espera.
- `clinic-placeholder-2.svg`: foto de ambiente interno.

Para trocar, salve as fotos reais em `assets/img` e atualize os caminhos no `index.html`.

Exemplo:

```html
<img src="./assets/img/foto-consultorio.jpg" alt="Recepção do consultório" width="540" height="640">
```

Na seção `#clinica`, o elemento `.unimed-slot` reserva espaço para inserir uma imagem autorizada da Unimed, caso exista.

## Horário de atendimento

O horário oficial exibido no site é:

- Segunda a quinta-feira: 8h às 16h.
- Sexta-feira: 8h às 11h.

Não há atendimento informado para sábados, domingos ou feriados.

## Formulário

O formulário usa FormSubmit:

```html
action="https://formsubmit.co/promulherbe@gmail.com"
```

No primeiro envio real, o FormSubmit enviará uma mensagem para `promulherbe@gmail.com` pedindo confirmação do endereço. Após confirmar, os próximos contatos chegarão normalmente por e-mail.

## Estrutura

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

## Checklist

- [ ] Logomarca oficial presente em `assets/img/logo-pro-mulher.png`
- [ ] Favicon LM configurado em `assets/icons/favicon-lm.svg`
- [ ] Ícone do WhatsApp configurado em `assets/icons/whatsapp.svg`
- [ ] Ícone do Instagram configurado em `assets/icons/instagram.svg`
- [ ] Horários oficiais revisados no site
- [ ] Mapa testado em desktop e celular
- [ ] Header testado em desktop amplo
- [ ] Menu mobile testado
- [ ] Favicon testado em aba anônima
- [ ] Caminhos testados no GitHub Pages
- [ ] Imagem Open Graph criada futuramente

## Checklist de publicação Git

```bash
git init
git add .
git commit -m "Atualiza site institucional da Dra. Lélia Moreira Toledo"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```
