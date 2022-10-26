<h1>
  Configurando Tailwind CSS ao Projeto
</h1>

```bash
  yarn add tailwindcss postcss autoprefixer -D
```
<h3>
  Iniciando aplicação
</h3>

```bash
  npx tailwindcss -p
```

<p>
  adicionar propriedade abaixo ao aquivo <i>tailwind.config.js</i>, no array content: []
</p>

```bash
  "./src/**/*.{js,ts,jsx,tsx}"
```

<h3>
  criar o global.css e adicionar os items abaixo
</h3>

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
