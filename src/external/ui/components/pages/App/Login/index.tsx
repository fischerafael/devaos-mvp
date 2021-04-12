import React from 'react'

import useForm from '../../../../../hooks/useForm'

import { FlexContainer } from '../../../../design-system/layout/FlexContainer'
import { Text } from '../../../../design-system/display/Text'
import { MainButton } from '../../../../design-system/entry/Button'

import Input from '../../../../design-system/entry/Input'
import CustomLink from '../../../molecules/CustomLink'

const Login = () => {
    const { data, handleChange } = useForm({ email: '', password: '' })

    console.log(data)

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
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                        <MainButton as="button" style={{ marginTop: '2rem' }}>
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
