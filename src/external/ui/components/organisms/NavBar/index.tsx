import React from 'react'
import { Text } from '../../../design-system/display/Text'
import { OutlineButton } from '../../../design-system/entry/Button'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'

const NavBar = () => {
    return (
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
    )
}

export default NavBar
