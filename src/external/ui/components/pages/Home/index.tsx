import React from 'react'
import { mainPageOptions } from '../../../../../entities/pages/home'

import HeroSection from '../../organisms/HeroSection'
import NavBar from '../../organisms/NavBar'
import OptionsSection from '../../organisms/OptionsSection'
import SectionTitle from '../../molecules/SectionTitle'
import CustomLink from '../../molecules/CustomLink'
import OptionsCard from '../../molecules/OptionsCard'
import Image from '../../../design-system/display/Image'

const Home = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <SectionTitle title="Desafios" />
            <OptionsSection>
                {mainPageOptions.map((option) => (
                    <React.Fragment key={option.id}>
                        <CustomLink href={option.href}>
                            <OptionsCard
                                title={option.title}
                                description={option.description}
                            >
                                <Image
                                    style={{
                                        height: '3rem',
                                        margin: '2rem 0'
                                    }}
                                    url={option.img}
                                    alt={option.title}
                                />
                            </OptionsCard>
                        </CustomLink>
                    </React.Fragment>
                ))}
            </OptionsSection>
        </>
    )
}

export default Home
