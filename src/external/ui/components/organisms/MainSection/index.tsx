import React from 'react'

import { Text } from '../../../design-system/display/Text'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'

interface Props {
    title: string
    subTitle: string
}

const MainSection = ({ title, subTitle }: Props) => {
    return (
        <FlexContainer as="main" style={{ flexDirection: 'column' }}>
            <FlexContainer
                as="section"
                style={{
                    minHeight: '50vh',
                    flexDirection: 'column',
                    padding: '1rem',
                    maxWidth: '900px'
                }}
            >
                <Text as="h1" style={{ fontSize: '4rem' }}>
                    {title}
                </Text>
                <Text as="h2">{subTitle}</Text>
            </FlexContainer>
        </FlexContainer>
    )
}

export default MainSection
