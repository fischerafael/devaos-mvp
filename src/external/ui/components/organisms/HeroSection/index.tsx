import React from 'react'

import { Text } from '../../../design-system/display/Text'
import { MainButton } from '../../../design-system/entry/Button'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'

const HeroSection = () => {
    return (
        <FlexContainer as="main" style={{ flexDirection: 'column' }}>
            <FlexContainer
                as="section"
                style={{
                    minHeight: '85vh',
                    flexDirection: 'column',
                    padding: '1rem',
                    maxWidth: '900px'
                }}
            >
                <Text as="h1" style={{ fontSize: '5rem' }}>
                    DEV AOS
                </Text>
                <Text as="h2">
                    O ponto de encontro de quem resolveu migrar para tecnologia
                </Text>
                <MainButton
                    as="button"
                    style={{ marginTop: '2rem', maxWidth: '10rem' }}
                >
                    Criar Conta
                </MainButton>
            </FlexContainer>
        </FlexContainer>
    )
}

export default HeroSection
