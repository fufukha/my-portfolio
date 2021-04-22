import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { darkTheme } from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles!.parentElement!.removeChild(jssStyles)!
    }
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
