import React, { useEffect, useState } from 'react'

import { useCredentials } from '../../../../../../contexts/CredentialsContext'

import {
    GhostButton,
    MainButton
} from '../../../../../design-system/entry/Button'
import { FlexContainer } from '../../../../../design-system/layout/FlexContainer'
import { DashboardNav } from '../../../../organisms/DashBoardNav'
import CustomLink from '../../../../molecules/CustomLink'
import NavBar from '../../../../organisms/NavBar'

import { httpClient } from '../../../../../../services'

import { Text } from '../../../../../design-system/display/Text'
import TaskList from './TaskList'

export const Tasks = () => {
    return (
        <>
            <NavBar />
            <DashboardNav />
            <TaskList />
        </>
    )
}
