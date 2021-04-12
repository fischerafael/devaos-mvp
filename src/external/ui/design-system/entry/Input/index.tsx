import React from 'react'

import { Text } from '../../display/Text'
import { FlexContainer } from '../../layout/FlexContainer'

interface Props {
    label: string
    error?: string
    name: string
    type: 'text' | 'password' | 'email'
    value: any
    onChange(value: any): void
}

const Input = ({ label, error, name, type, value, onChange }: Props) => {
    return (
        <FlexContainer
            as="label"
            style={{
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}
        >
            <FlexContainer as="div" style={{ justifyContent: 'space-between' }}>
                <Text
                    as="span"
                    style={{
                        fontSize: '0.65rem',
                        margin: '0.5rem 0'
                    }}
                >
                    {label}
                </Text>
                <Text
                    as="span"
                    style={{
                        fontSize: '0.65rem',
                        marginLeft: '0.5rem',
                        color: '#dddddd',
                        textAlign: 'right'
                    }}
                >
                    {error}
                </Text>
            </FlexContainer>

            <FlexContainer
                as="input"
                style={{
                    height: '3rem',
                    padding: '0 1rem',
                    border: 'solid 0.025rem #dbdbdb'
                }}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </FlexContainer>
    )
}

export default Input
