import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <title>LEsteban</title>
      </head>
      <Head title="LEsteban" />
      <body className="bg-background">
        <NextUIProvider>
          <Main />
          <NextScript />
        </NextUIProvider>
      </body>
    </Html>
  )
}
