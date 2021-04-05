import styled from 'styled-components'
import { FlexContainer } from '../../layout/FlexContainer'

export const MainButton = styled(FlexContainer)``

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
