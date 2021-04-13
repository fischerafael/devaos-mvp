import React from 'react'

import { useRouter } from 'next/router'

import { FlexContainer } from '../../../design-system/layout/FlexContainer'
import SingleLink from './Links'

export const DashboardNav = () => {
    const router = useRouter()
    const pathname = router.pathname

    return (
        <FlexContainer as="section">
            <FlexContainer
                as="nav"
                style={{
                    padding: '1rem',
                    justifyContent: 'space-between',
                    height: '15vh',
                    maxWidth: '900px'
                }}
            >
                <SingleLink
                    pathname="/app/dashboard/tasks"
                    active={pathname === '/app/dashboard/tasks' && true}
                >
                    Tarefas
                </SingleLink>
                <SingleLink
                    pathname="/app/dashboard/config"
                    active={pathname === '/app/dashboard/config' && true}
                >
                    Configurações
                </SingleLink>
            </FlexContainer>
        </FlexContainer>
    )
}
