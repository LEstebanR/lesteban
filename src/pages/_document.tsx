import React from 'react'

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <title>LEsteban</title>
      </head>
      <Head title="LEsteban" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
