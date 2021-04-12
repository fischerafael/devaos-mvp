import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../external/ui/styles/GlobalStyle'
import { theme } from '../external/ui/styles/theme'

import { LoadingProvider } from '../external/contexts/LoadingContext'
import { CredentialsProvider } from '../external/contexts/CredentialsContext'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <LoadingProvider>
                    <CredentialsProvider>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </CredentialsProvider>
                </LoadingProvider>
            </ThemeProvider>
        </>
    )
}
