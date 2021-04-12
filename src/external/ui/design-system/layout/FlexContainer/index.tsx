import styled, { css } from 'styled-components'

interface Props {
    background?: 'grey'
}

export const FlexContainer = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;

    /* background: ${(props) => props.theme.colors.ligth};
    ${(props) => props.background === 'grey' && grey} */

    width: 100%;
    height: 100%;
`

const grey = css`
    background: ${(props) => props.theme.colors.grey};
`
