import React from 'react'
import { Text } from '../../../design-system/display/Text'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'

interface Props {
    title: string
}

const SectionTitle = ({ title }: Props) => {
    return (
        <FlexContainer as="section" style={{ padding: '1rem' }}>
            <Text as="h2" style={{ fontSize: '2rem', textAlign: 'start' }}>
                {title}
            </Text>
        </FlexContainer>
    )
}

export default SectionTitle
