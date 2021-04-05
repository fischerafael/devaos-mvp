import React from 'react'
import { Text } from '../../../design-system/display/Text'
import { MainButton, OutlineButton } from '../../../design-system/entry/Button'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'

const Home = () => {
    return (
        <>
            <FlexContainer as="header">
                <FlexContainer
                    as="nav"
                    style={{
                        minHeight: '15vh',
                        justifyContent: 'space-between',
                        maxWidth: '900px',
                        padding: '1rem'
                    }}
                >
                    <Text as="h1">DEVAOS</Text>
                    <OutlineButton as="button" style={{ maxWidth: '10rem' }}>
                        Entrar
                    </OutlineButton>
                </FlexContainer>
            </FlexContainer>
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
                        O ponto de encontro de quem resolveu migrar para
                        tecnologia
                    </Text>
                    <MainButton
                        as="button"
                        style={{ marginTop: '2rem', maxWidth: '10rem' }}
                    >
                        Criar Conta
                    </MainButton>
                </FlexContainer>
            </FlexContainer>
        </>
    )
}

export default Home
