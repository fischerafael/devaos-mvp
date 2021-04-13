import React from 'react'

import { Text } from '../../display/Text'
import { FlexContainer } from '../../layout/FlexContainer'

interface Props {
    label: string
    error?: string
    id: string
    type: 'text' | 'password' | 'email'
    value: any
    onChange(value: any): void
    onBlur?(value: any): void
}

const Input = ({ label, error, id, type, value, onChange, onBlur }: Props) => {
    return (
        <FlexContainer
            as="label"
            style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                height: '4rem',
                margin: '0.25rem 0'
            }}
        >
            <FlexContainer
                as="div"
                style={{ justifyContent: 'space-between', height: '1.5rem' }}
            >
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
                    padding: '0 1rem',
                    fontSize: '.75rem',
                    border: 'solid 0.025rem #dbdbdb'
                }}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </FlexContainer>
    )
}

export default Input
