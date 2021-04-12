import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../external/ui/styles/GlobalStyle'
import { theme } from '../external/ui/styles/theme'

import { LoadingProvider } from '../external/contexts/LoadingContext'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <LoadingProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </LoadingProvider>
            </ThemeProvider>
        </>
    )
}
