import React from 'react'

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <div>
        <Head title="LEsteban" />
      </div>
      <body className="bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
