import React from 'react'

import { Text } from '../../../design-system/display/Text'
import { MainButton } from '../../../design-system/entry/Button'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'
import CustomLink from '../../molecules/CustomLink'

const HeroSection = () => {
    return (
        <FlexContainer as="main" style={{ flexDirection: 'column' }}>
            <FlexContainer
                as="section"
                style={{
                    minHeight: '75vh',
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
                <CustomLink href="/register">
                    <MainButton
                        as="button"
                        style={{ marginTop: '2rem', maxWidth: '10rem' }}
                    >
                        Criar Conta
                    </MainButton>
                </CustomLink>
            </FlexContainer>
        </FlexContainer>
    )
}

export default HeroSection
