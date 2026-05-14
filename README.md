# CoE IA — documentação estática

Site em HTML/CSS/JS puro, pronto para **GitHub Pages**.

## Publicar (recomendado: GitHub Actions)

1. Crie o repositório no GitHub e envie este conteúdo (`git push`).
2. No repositório: **Settings** → **Pages** → **Build and deployment** → **Source**: selecione **GitHub Actions** (não “Deploy from a branch”).
3. O workflow `.github/workflows/deploy-pages.yml` roda a cada push na branch `main` ou `master` e publica o site.
4. A URL aparece em **Settings** → **Pages** (formato `https://<usuario>.github.io/<repositorio>/`).

Abra sempre pela home: `…/index.html` (ou `…/` se o servidor redirecionar para `index.html`).

## Publicar só pela branch (sem Actions)

1. **Settings** → **Pages** → **Source**: **Deploy from a branch**.
2. Branch `main` (ou `master`), pasta **`/` (root)**.
3. O ficheiro **`.nojekyll`** na raiz evita que o Jekyll ignore ficheiros ou pastas com nomes especiais.

## Recursos

- Coloque o logótipo em **`assets/Assaí_Atacadista_logo_2024.svg.png`** (o caminho já está referenciado nas páginas). A pasta `assets` existe com `.gitkeep` para poder versionar o binário quando o adicionar.
- **`404.html`** é usada automaticamente pelo GitHub Pages para URLs inexistentes no mesmo site.

## Testar localmente

Abra `index.html` no browser ou sirva a pasta com um servidor estático, por exemplo:

```bash
npx --yes serve .
```

Depois aceda ao URL indicado no terminal (inclua o path do repositório se estiver num subpath).
