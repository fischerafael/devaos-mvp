import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../../../hooks/useAuth'

import { FlexContainer } from '../../../../design-system/layout/FlexContainer'
import { Text } from '../../../../design-system/display/Text'
import { MainButton } from '../../../../design-system/entry/Button'

import Input from '../../../../design-system/entry/Input'
import CustomLink from '../../../molecules/CustomLink'

const CreateAccount = () => {
    const { data, handleCreateAccount, handleChange } = useAuth({
        email: '',
        password: '',
        username: ''
    })

    const [isValid, setValid] = useState(false)
    useEffect(() => {
        setValid(false)

        data.email.length >= 6 &&
            data.password.length >= 6 &&
            data.username.length >= 3 &&
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
                        Crie sua conta
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
                            label="Usuário"
                            error="3 carácteres no mínimo"
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                        />
                        <Input
                            label="Email"
                            error="6 carácteres no mínimo"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                        <Input
                            label="Senha"
                            error="6 carácteres no mínimo"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                        <MainButton
                            as="button"
                            disabled={isValid ? false : true}
                            style={{ marginTop: '2rem' }}
                            onClick={handleCreateAccount}
                        >
                            Cadastrar
                        </MainButton>
                    </FlexContainer>
                    <CustomLink
                        href="/app/login"
                        style={{
                            marginTop: '1rem',
                            textDecoration: 'none',
                            fontSize: '.75rem'
                        }}
                    >
                        <Text
                            as="span"
                            style={{ color: '#0070f3', marginTop: '1rem' }}
                        >
                            Já tenho uma conta
                        </Text>
                    </CustomLink>
                </FlexContainer>
            </FlexContainer>
        </>
    )
}

export default CreateAccount
