# Dra. Lélia Moreira Toledo

Site institucional estático da Dra. Lélia Moreira Toledo, ginecologista em Boa Esperança, MG. Desenvolvido somente com HTML semântico, CSS e JavaScript puro, sem etapa de build.

## Execução e publicação

O site pode ser aberto diretamente pelo `index.html`. Para um teste local mais próximo da hospedagem estática, execute:

```bash
python -m http.server 8080
```

Acesse `http://localhost:8080`. Os caminhos são relativos e compatíveis com GitHub Pages em subpasta e Vercel na raiz. Antes da publicação definitiva, substitua os valores provisórios de domínio em `canonical`, `og:url`, `robots.txt` e `sitemap.xml`.

## Identidade temporária LM

A identidade visual anterior deixou de ser referenciada. O placeholder institucional atual é o monograma dourado LM em:

```text
assets/icons/logo-lm.svg
```

Ele acompanha o nome “Dra. Lélia Moreira Toledo” no cabeçalho e rodapé. Para trocar a identidade no futuro, substitua o SVG mantendo seu `viewBox` e proporção ou atualize os caminhos nas duas páginas e revise as dimensões em `.site-brand img`. Preserve o favicon LM ou atualize ambos com a mesma linguagem visual.

Os arquivos de marca anteriores permanecem em `assets/img` apenas como backup e não devem ser reutilizados como identidade principal sem uma decisão posterior.

## Logo da Unimed

A identidade da Unimed exibida no card de atendimento da seção da clínica está salva localmente em formato PNG:

```text
assets/img/convenios/logo-unimed.png
```

A composição foi baseada na imagem de referência fornecida para o projeto e conferida com uma reprodução pública da mesma versão vertical da marca, publicada na página de convênios do [CREF14/GO-TO](https://cref14.org.br/convenios_cref14/unimed-goiania/). A arte final preserva o fundo verde, o símbolo, o nome “Unimed”, a moldura branca, as cores e as proporções da marca.

Para substituir a imagem futuramente, mantenha o mesmo nome de arquivo e uma proporção aproximada de 2:1. Caso o nome ou o formato seja alterado, atualize também a referência em `index.html`. Não estique, recorte, recolora nem aplique filtros à marca. A clínica deve confirmar que possui autorização para usar a identidade da Unimed como indicação de atendimento.

## Marcas de terceiros

O símbolo do WhatsApp em `assets/icons/whatsapp.svg` usa o desenho vetorial do Simple Icons. O projeto Simple Icons é distribuído sob CC0 1.0, mas essa licença não concede direitos sobre marcas registradas; o ícone é usado apenas para identificar o link oficial de contato.

## Contato

O formulário e a integração de envio foram removidos. Os canais exibidos são:

- WhatsApp e telefone: `(35) 98841-2574`;
- e-mail: `promulherbe@gmail.com`;
- Instagram: `@lelia.m.toledo`;
- endereço e Google Maps.

A política de privacidade considera apenas contatos iniciados voluntariamente por serviços externos, o mapa, dados técnicos que podem ser tratados pela hospedagem e a preferência do banner salva no `localStorage`.

## Congressos e atualização profissional

A seção `#congressos` contém três cards claramente marcados como conteúdo em atualização. Eles não representam eventos reais. Substitua título, ano, local, descrição e área somente depois de confirmar as informações com a médica ou a clínica.

As fotos devem ser colocadas em `assets/img/congressos/`. As instruções completas estão em `assets/img/congressos/README.md`.

Recomendações principais:

- WebP preferencial ou JPG otimizado;
- aproximadamente 1200 px de largura;
- proporção 4:3 ou 3:2;
- nomes como `congresso-2024-01.webp` ou `curso-ultrassonografia-2025.webp`;
- `loading="lazy"`, `width`, `height` e texto alternativo verdadeiro no HTML;
- usar apenas dados e fotografias reais;
- obter autorização antes de publicar imagens de terceiros;
- remover metadados sensíveis quando necessário.

## Outras imagens

Os arquivos `hero-placeholder.svg`, `clinic-placeholder-1.svg` e `clinic-placeholder-2.svg` ainda são placeholders. Para substituí-los, salve fotos reais otimizadas em `assets/img` e atualize os caminhos, dimensões e textos alternativos em `index.html`.

## Checklist mobile e de conteúdo

- [x] Testado em 320 px
- [x] Testado em 360 px
- [x] Testado em 375 px
- [x] Testado em 390 px
- [x] Testado em 430 px
- [x] Testado em 768 px
- [x] Testado em 1024 px
- [x] Menu mobile funcionando, inclusive Escape e fechamento pelos links
- [x] Títulos sem cortes
- [x] Sem rolagem horizontal
- [x] Botão do WhatsApp totalmente visível
- [x] Formulário removido
- [x] Contatos diretos configurados
- [x] Logo LM exibida
- [ ] Fotos reais dos congressos adicionadas
- [ ] Textos dos eventos revisados
- [ ] Autorizações de imagem confirmadas
- [ ] Mapa testado em desktop e celular
- [ ] Caminhos testados no GitHub Pages
- [ ] Publicação na Vercel validada

## Estrutura

```text
assets/
  icons/
    logo-lm.svg
  img/
    congressos/
      README.md
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
