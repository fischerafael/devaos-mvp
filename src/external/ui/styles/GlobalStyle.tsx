import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${() => global}
`
const global = css`
    *,
    html,
    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        box-sizing: border-box;

        font-family: 'Poppins';
        color: ${(props) => props.theme.colors.dark};
    }
`
