import React, { ReactNode } from 'react'
import CustomLink from '../../../molecules/CustomLink'
import { Text } from '../../../../design-system/display/Text'

interface Props {
    pathname: string
    children: ReactNode
    active?: boolean
}

const SingleLink = ({ pathname, children, active }: Props) => {
    return (
        <CustomLink href={pathname} style={{ textDecoration: 'none' }}>
            {active ? (
                <Text
                    style={{
                        fontSize: '.75rem',
                        fontWeight: 'bold'
                    }}
                >
                    {children}
                </Text>
            ) : (
                <Text
                    style={{
                        fontSize: '.75rem'
                    }}
                >
                    {children}
                </Text>
            )}
        </CustomLink>
    )
}

export default SingleLink
