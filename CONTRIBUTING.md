# Maintaining this personal website

This repository maintains Chisom Anyabolu's personal academic website at
<https://sombiri.github.io/>. Corrections to this site can be reported through
[this repository's issues](https://github.com/Sombiri/Sombiri.github.io/issues).

Keep proposed changes focused on the personal site's content, accessibility,
or maintenance. Preserve the simple academic design, existing URLs, and
GitHub Pages compatibility. Do not add unverified professional claims or
publication metadata.

For local development, follow [README.md](README.md). Before proposing a change,
run:

```sh
bundle exec jekyll build --safe --trace
bundle exec jekyll doctor
```

Confirm that Home, Research, Projects, Publications, and CV still generate.
Preserve the existing license and upstream notices. Review references and
build output before removing legacy files or assets.
