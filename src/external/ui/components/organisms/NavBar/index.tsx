import React from 'react'
import { Text } from '../../../design-system/display/Text'
import { OutlineButton } from '../../../design-system/entry/Button'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'
import CustomLink from '../../molecules/CustomLink'

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
                <CustomLink href="/">
                    <Text as="h1" style={{ fontSize: '1rem' }}>
                        DEVAOS
                    </Text>
                </CustomLink>

                <CustomLink href="/login">
                    <OutlineButton as="button" style={{ maxWidth: '10rem' }}>
                        Entrar
                    </OutlineButton>
                </CustomLink>
            </FlexContainer>
        </FlexContainer>
    )
}

export default NavBar
