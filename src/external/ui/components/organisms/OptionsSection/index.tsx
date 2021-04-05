import React from 'react'

import { FlexContainer } from '../../../design-system/layout/FlexContainer'
import { GridContainer } from '../../../design-system/layout/GridContainer'

import OptionsCard from '../../molecules/OptionsCard'
import Image from '../../../design-system/display/Image'

const OptionsSection = () => {
    return (
        <FlexContainer as="section" style={{ flexDirection: 'column' }}>
            <GridContainer
                as="nav"
                style={{
                    padding: '1rem',
                    maxWidth: '900px'
                }}
            >
                <OptionsCard
                    title="Design"
                    description="Desafios de UI & UX Design"
                >
                    <Image
                        style={{ height: '3rem', margin: '2rem 0' }}
                        url="/design/icons/design.svg"
                        alt="Design"
                    />
                </OptionsCard>
                <OptionsCard
                    title="Frontend"
                    description="Desafios de Desenvolvimento Frontend"
                >
                    <Image
                        style={{ height: '3rem', margin: '2rem 0' }}
                        url="/design/icons/frontend.svg"
                        alt="Design"
                    />
                </OptionsCard>
                <OptionsCard
                    title="Backend"
                    description="Desafios de Desenvolvimento Backend"
                >
                    <Image
                        style={{ height: '3rem', margin: '2rem 0' }}
                        url="/design/icons/backend.svg"
                        alt="Design"
                    />
                </OptionsCard>
            </GridContainer>
        </FlexContainer>
    )
}

export default OptionsSection
