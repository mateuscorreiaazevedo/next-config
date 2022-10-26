<h1>
  Configurando Styled-Components
</h1>

```bash
  yarn add styled-components
```

=> adicionando tipagem


```bash
  yarn add @types/styled-components -D
```

=> configurando o <b>babel.config.js</b>

```bash
  module.exports = {
    "presets": ["next/babel"],
    "plugins": [["styled-components", { "ssr": true }]]
  }
```

=> configurando arquivo _document.(tsx || jsx)

```bash
  import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
  import { ServerStyleSheet } from 'styled-components'
  import React from 'react'

  export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage

      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          })

        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        }
      } finally {
        sheet.seal()
      }
    }
    render(): JSX.Element {
      return (
        <Html lang='pt'>
          <Head>
            <meta  charSet='utf-8'/>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
            </style>

            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          </Head>
          <body>
            <Main/>
            <NextScript/>
          </body>
        </Html>
      )
    }
  }
```

-> configurar o global.ts
-> configurar theme.ts

configurando o styled.d.ts

```bash
  import 'styled-components'
  import theme from './theme'

  export type Theme = typeof theme

  declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
  }
```
