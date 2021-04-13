import React from 'react'

import { useAuth } from '../../../../../hooks/useAuth'

import { FlexContainer } from '../../../../design-system/layout/FlexContainer'
import { Text } from '../../../../design-system/display/Text'
import { MainButton } from '../../../../design-system/entry/Button'

import Input from '../../../../design-system/entry/Input'
import CustomLink from '../../../molecules/CustomLink'

const Login = () => {
    const { data, handleChange, handleLogin } = useAuth({
        identifier: '',
        password: ''
    })

    const [isValid, setValid] = React.useState(false)
    React.useEffect(() => {
        setValid(false)

        data.identifier.length >= 6 &&
            data.password.length >= 6 &&
            setValid(true)
    }, [data])

    return (
        <>
            <FlexContainer as="main" style={{ flexDirection: 'column' }}>
                <FlexContainer
                    as="section"
                    style={{
                        flexDirection: 'column',
                        padding: '1rem',
                        maxWidth: '450px',
                        minHeight: '100vh'
                    }}
                >
                    <Text
                        as="h2"
                        style={{ padding: '1rem 0', fontWeight: 'normal' }}
                    >
                        Acesse a sua conta
                    </Text>
                    <FlexContainer
                        as="form"
                        style={{
                            padding: '2rem',
                            background: '#FAFAFA',
                            flexDirection: 'column'
                        }}
                    >
                        <Input
                            label="Email"
                            error="6 carácteres no mínimo"
                            type="email"
                            id="identifier"
                            value={data.identifier}
                            onChange={handleChange}
                        />
                        <Input
                            label="Senha"
                            error="6 carácteres no mínimo"
                            type="password"
                            id="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                        <MainButton
                            onClick={handleLogin}
                            disabled={isValid ? false : true}
                            as="button"
                            style={{ marginTop: '2rem' }}
                        >
                            Entrar
                        </MainButton>
                    </FlexContainer>
                    <CustomLink
                        href="/app/create-account"
                        style={{
                            marginTop: '1rem',
                            textDecoration: 'none',
                            fontSize: '.75rem',
                            fontWeight: 'bold'
                        }}
                    >
                        <Text as="span" style={{ color: '#0070f3' }}>
                            Criar conta
                        </Text>
                    </CustomLink>
                </FlexContainer>
            </FlexContainer>
        </>
    )
}

export default Login
