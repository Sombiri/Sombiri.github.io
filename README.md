# Chisom Anyabolu — Personal Academic Website

This repository contains the source code for my personal academic website:

[https://sombiri.github.io/](https://sombiri.github.io/)

The site presents my research, projects, publications, and curriculum vitae.

## Main sections

- Home
- Research
- Projects
- Publications
- CV

## Technical stack

- Jekyll, with dependencies managed by Bundler through `Gemfile` and `Gemfile.lock`.
- GitHub Pages hosting.
- AcademicPages / Minimal Mistakes-derived layouts, Liquid includes, and SCSS.
- Markdown pages in `_pages/` and publication records in `_publications/`.

## Local development

Use Ruby 3.3 and Bundler 4.0.16, the versions used to validate this repository.
From the repository root:

```sh
bundle install
bundle exec jekyll serve --safe --config _config.yml,_config.dev.yml
```

Open <http://localhost:4000>. Restart Jekyll after changing configuration files.
Keep `Gemfile.lock` under version control; do not delete it as a troubleshooting
step or to suppress dependency warnings.

Run the production build and configuration checks with:

```sh
bundle exec jekyll build --safe --trace
bundle exec jekyll doctor
```

Generated files are written to `_site/`. The existing GitHub Pages deployment
uses this repository's Jekyll source and configuration.

Node.js/npm is only needed when rebuilding the theme's JavaScript bundle. The
existing optional commands are `npm install` followed by `npm run build:js`;
normal content and SCSS changes use the Jekyll commands above.

## Content maintenance

Edit the main pages in `_pages/`, navigation in `_data/navigation.yml`, and
site-wide settings in `_config.yml`. Publication metadata has one source of
truth: `_publications/*.md`. Project images live in `images/software/`; the CV
PDF is in `files/pdf/`.

Legacy generators and sample records are retained for reference, not as current
research content or setup instructions. See [the generator notes](markdown_generator/readme.md).
Some sample pages and collections remain reachable through existing archives
and the sitemap, so they have not been removed as part of the documentation
cleanup. Their removal would need a separate reference and URL review.

## Attribution

This site originated from [AcademicPages](https://github.com/academicpages/academicpages.github.io),
which is based on the [Minimal Mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes)
by Michael Rose. AcademicPages was adapted by Stuart Geiger. The repository has
since been customized for this personal website.

The original MIT license and copyright notice are preserved in [LICENSE](LICENSE).
Third-party attribution and license notices remain in the source files. The
[upstream changelog](CHANGELOG.md) is retained as historical reference.
