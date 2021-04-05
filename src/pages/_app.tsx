import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../external/ui/styles/GlobalStyle";
import { theme } from "../external/ui/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
