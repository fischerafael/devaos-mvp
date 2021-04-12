import { useAuth } from '../../../../hooks/useAuth'

import { OutlineButton } from '../../../design-system/entry/Button'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'

import CustomLink from '../../molecules/CustomLink'
import LogoDevaos from '../../molecules/Logo'

const NavBar = () => {
    const { credentials, handleLogout } = useAuth()
    console.log(credentials)

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
                <CustomLink
                    href="/"
                    style={{
                        textDecoration: 'none'
                    }}
                >
                    <LogoDevaos />
                </CustomLink>

                {credentials.jwt && (
                    <OutlineButton
                        as="button"
                        style={{ maxWidth: '10rem' }}
                        onClick={handleLogout}
                    >
                        Sair
                    </OutlineButton>
                )}

                {!credentials.jwt && (
                    <CustomLink
                        href="/app/login"
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <OutlineButton
                            as="button"
                            style={{ maxWidth: '10rem' }}
                        >
                            Entrar
                        </OutlineButton>
                    </CustomLink>
                )}
            </FlexContainer>
        </FlexContainer>
    )
}

export default NavBar
