import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import { getCssText } from 'styles/stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="canonical" href="https://t9.mareksurak.com" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Montserrat-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <style
            // eslint-disable-next-line react/forbid-dom-props
            id="stitches"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
