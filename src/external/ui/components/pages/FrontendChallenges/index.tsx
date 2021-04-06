import React from 'react'

import { designChallenges } from '../../../../../entities/pages/challenges/design'

import MainSection from '../../organisms/MainSection'
import NavBar from '../../organisms/NavBar'
import OptionsSection from '../../organisms/OptionsSection'
import OptionsCard from '../../molecules/OptionsCard'

const FrontendChallenges = () => {
    return (
        <>
            <NavBar />
            <MainSection
                title="Desafios de Frontend"
                subTitle="Teste e pratique suas habilidades desenvolvimento Frontend"
            />
            <OptionsSection>
                {designChallenges &&
                    designChallenges.map((option) => (
                        <React.Fragment key={option.id}>
                            <OptionsCard
                                title={option.title}
                                description={option.shortDescription}
                            />
                        </React.Fragment>
                    ))}
            </OptionsSection>
        </>
    )
}

export default FrontendChallenges
