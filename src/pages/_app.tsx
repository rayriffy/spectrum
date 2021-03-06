import React from 'react'

import App from 'next/app'
import Head from 'next/head'

class NextApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>Spectrum</title>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Google+Sans&display=swap'
          />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default NextApp
