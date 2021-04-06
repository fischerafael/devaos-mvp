import React from 'react'

import { designChallenges } from '../../../../../entities/pages/challenges/design'

import MainSection from '../../organisms/MainSection'
import NavBar from '../../organisms/NavBar'
import OptionsSection from '../../organisms/OptionsSection'
import OptionsCard from '../../molecules/OptionsCard'

const BackendChallenges = () => {
    return (
        <>
            <NavBar />
            <MainSection
                title="Desafios de Backend"
                subTitle="Teste e pratique suas habilidades de desenvolvimento Backend"
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

export default BackendChallenges
