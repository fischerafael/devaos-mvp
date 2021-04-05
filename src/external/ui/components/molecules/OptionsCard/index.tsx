import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../../../design-system/display/Text'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'

interface Props {
    children?: ReactNode
    title: string
    description: string
}

const OptionsCard = ({ children, title, description }: Props) => {
    return (
        <OptionsCardContainer
            as="article"
            background="grey"
            style={{
                padding: '3rem 1rem',
                flexDirection: 'column',
                cursor: 'pointer'
            }}
        >
            {children}
            <Text
                as="h2"
                style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem'
                }}
            >
                {title}
            </Text>
            <Text as="p" style={{ fontSize: '.75rem' }}>
                {description}
            </Text>
        </OptionsCardContainer>
    )
}

export default OptionsCard

const OptionsCardContainer = styled(FlexContainer)`
    padding: 3rem 1rem;
    flex-direction: column;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background: ${(props) => props.theme.colors.ligth};
    }
`
