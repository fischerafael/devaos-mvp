import React from 'react'
import { Text } from '../../../design-system/display/Text'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'
import CustomLink from '../../molecules/CustomLink'

export const DashboardNav = () => {
    return (
        <FlexContainer
            as="nav"
            style={{
                padding: '1rem',
                justifyContent: 'space-between',
                height: '15vh'
            }}
        >
            <CustomLink
                href="/app/dashboard"
                style={{ textDecoration: 'none' }}
            >
                <Text style={{ fontSize: '.75rem' }}>Início</Text>
            </CustomLink>
            <CustomLink
                href="/app/dashboard"
                style={{ textDecoration: 'none' }}
            >
                <Text style={{ fontSize: '.75rem' }}>Tarefas</Text>
            </CustomLink>
            <CustomLink
                href="/app/dashboard/config"
                style={{ textDecoration: 'none' }}
            >
                <Text style={{ fontSize: '.75rem' }}>Configurações</Text>
            </CustomLink>
        </FlexContainer>
    )
}
