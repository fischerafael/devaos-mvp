import React, { useEffect, useState } from 'react'
import { Text } from '../../../../../design-system/display/Text'
import { MainButton } from '../../../../../design-system/entry/Button'

import Input from '../../../../../design-system/entry/Input'
import { FlexContainer } from '../../../../../design-system/layout/FlexContainer'
import CustomLink from '../../../../molecules/CustomLink'
import { DashboardNav } from '../../../../organisms/DashBoardNav'
import NavBar from '../../../../organisms/NavBar'

export const Tasks = () => {
    return (
        <>
            <NavBar />
            <DashboardNav />
            <FlexContainer as="main">
                <FlexContainer
                    as="section"
                    style={{
                        padding: '1rem',
                        height: '15vh',
                        maxWidth: '900px'
                    }}
                >
                    <CustomLink
                        style={{ textDecoration: 'none' }}
                        href="/app/dashboard/tasks/add-task"
                    >
                        <MainButton
                            as="button"
                            style={{ height: '3rem', width: '10rem' }}
                        >
                            Nova Tarefa
                        </MainButton>
                    </CustomLink>
                </FlexContainer>
            </FlexContainer>
        </>
    )
}
