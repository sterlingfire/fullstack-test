import '../styles/globals.css'
import theme from '../src/theme.js'

import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Layout from '../src/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* ThemeProvider looks like a context provider for material UI themes */}
        <Layout>
          <CssBaseline />
          {/* Using a Component for CSS baseline is interesting. I have used "CSS reset" css files, but not as a component before. */}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
