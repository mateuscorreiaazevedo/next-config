<h1>
  Configurando Next App
</h1>

```bash
npx create-next-app name-app
```
<h3>
  Inserindo typescript
</h3>

<p>
  criar arquivo <i>tsconfig.json</i> na pasta raiz, atualizar arquivos index.js e _app.js para '.tsx' e rodar o comando
</p>

```bash
yarn dev
```

<h3>
adicionando Eslint
</h3>

```bash
 yarn add eslint -D
```
iniciar aplicação
```bash
yarn eslint --init
```
<i>
  *o eslint irá pedir para instalar dependência com npm, caso esteja utilizando yarn, aceite o npm e depois apague o arquivo package-lock.json e no terminal execute o comando abaixo
</i>

```bash
  yarn
 ```
<h3>
  Adicionando Prettier ao projeto
</h3>
 
 ```bash
 yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
 ```
<h3>
  copiar configuração no arquivo <i>.eslintrc.json</i> e criar arquivo .eslintignore
</h3>
 

<h3>
Criar arquivo <i>.prettierrc</i> e copiar configurações abaixo:
</h3>

```bash 
{
  "parser": "typescript",
  "semi": false,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2,
  "spaceBeforeFunctionParen": true,
  "objectShortHand": true,
  "semicolons": false
}
```

<p>
  Adicionar tipagem nos arquivos index.tsx e _app.tsx
</p>
<p>
  botão direito e clicar em 'Generate .editorconfig'; adicionar propriedade 'end_of_line = lf'; alterar ambos falses para true.
</p>

adicionar pasta .vscode/settings.json e colar abaixo
```bash
{
  "window.zoomLevel": 0,
  "prettier.configPath": "./.prettierrc",
  "cSpell.words": [
    "camelcase",
    "commitlint"
  ],
  "editor.inlineSuggest.enabled": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "search.showLineNumbers": false,
  "workbench.editor.enablePreview": false,
  "workbench.list.openMode": "doubleClick",
}
```
