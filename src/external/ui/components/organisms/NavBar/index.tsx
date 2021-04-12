import React from 'react'
import { Text } from '../../../design-system/display/Text'
import { OutlineButton } from '../../../design-system/entry/Button'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'
import CustomLink from '../../molecules/CustomLink'
import LogoDevaos from '../../molecules/Logo'

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
                    <LogoDevaos />
                </CustomLink>

                <CustomLink
                    href="/app/login"
                    style={{
                        textDecoration: 'none'
                    }}
                >
                    <OutlineButton as="button" style={{ maxWidth: '10rem' }}>
                        Entrar
                    </OutlineButton>
                </CustomLink>
            </FlexContainer>
        </FlexContainer>
    )
}

export default NavBar
