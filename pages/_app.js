import { ThemeProvider } from '@material-ui/styles'
import Layout from '../components/Layout'
import theme from '../theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
