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
        font-size: 100%;
        color: ${(props) => props.theme.colors.dark};
    }

    button {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.ligth};
        font: inherit;
        font-size: 0.75rem;
        font-weight: 700;
        cursor: pointer;
        transition: 0.5s;
        padding: 0.75rem 2rem;

        border-radius: 10rem;

        &:hover {
            color: ${(props) => props.theme.colors.primary};
            background: transparent;
        }
    }

    @media (max-width: 900px) {
        *,
        html,
        body {
            font-size: 85%;
        }
    }
`
