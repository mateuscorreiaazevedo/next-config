<h1>Configurando lib Next-images</h1>

```bash
  yarn add next-images
```

<p>
  Adicionando configurações no next.config.js
</p>

```bash
  const withImages = require('next-images')
  module.exports = withImages({
    esModule: true
  })
```

<p>
  Adicionando 'reference' ao next-env.d.ts
</p>

```bash
  /// <reference types="next-images" />
```
