import React from 'react'

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="LEsteban personal website"
          title="LEsteban"
        />
      </Head>
      <body className="bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
