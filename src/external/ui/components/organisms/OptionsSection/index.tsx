import React, { ReactNode } from 'react'

import { FlexContainer } from '../../../design-system/layout/FlexContainer'
import { GridContainer } from '../../../design-system/layout/GridContainer'

interface Props {
    children: ReactNode
}

const OptionsSection = ({ children }: Props) => {
    return (
        <FlexContainer as="section" style={{ flexDirection: 'column' }}>
            <GridContainer
                as="nav"
                style={{
                    padding: '1rem',
                    maxWidth: '900px'
                }}
            >
                {children}
            </GridContainer>
        </FlexContainer>
    )
}

export default OptionsSection
