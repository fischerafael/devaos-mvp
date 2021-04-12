import styled, { css } from 'styled-components'
import { FlexContainer } from '../../layout/FlexContainer'

interface Props {
    disabled?: boolean
}

export const MainButton = styled(FlexContainer)<Props>`
    background: ${(props) => props.theme.colors.primary};
    ${(props) => props.disabled && disabledButton}
`
const disabledButton = css`
    background: #dddddd;
    &:hover {
        background: #dddddd;
        color: white;
        cursor: not-allowed;
    }
`

export const GhostButton = styled(MainButton)`
    background: white;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.ligth};
    }
`

export const OutlineButton = styled(MainButton)`
    background: white;
    color: ${(props) => props.theme.colors.primary};
    border: solid 0.1rem ${(props) => props.theme.colors.primary};

    &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.ligth};
    }
`
