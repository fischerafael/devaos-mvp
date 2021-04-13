import { Text } from '../../../../../../design-system/display/Text'
import {
    GhostButton,
    MainButton
} from '../../../../../../design-system/entry/Button'
import { FlexContainer } from '../../../../../../design-system/layout/FlexContainer'
import CustomLink from '../../../../../molecules/CustomLink'
import { useAddTask } from '../useAddTask'

const TaskList = () => {
    const { tasks, handleRemoveTask } = useAddTask()

    return (
        <FlexContainer as="main">
            <FlexContainer
                as="section"
                style={{
                    padding: '1rem',
                    minHeight: '15vh',
                    maxWidth: '900px',
                    flexDirection: 'column'
                }}
            >
                <CustomLink
                    style={{ textDecoration: 'none' }}
                    href="/app/dashboard/tasks/add-task"
                >
                    <MainButton
                        as="button"
                        style={{ height: '3rem', width: '15rem' }}
                    >
                        Adicionar Tarefa
                    </MainButton>
                </CustomLink>

                <FlexContainer
                    as="section"
                    style={{ flexDirection: 'column', margin: '2rem 0' }}
                >
                    {tasks.map((task) => (
                        <FlexContainer
                            key={task.id}
                            as="article"
                            style={{
                                background: '#fafafa',
                                margin: '.25rem',
                                padding: '1rem',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                maxWidth: '600px'
                            }}
                        >
                            <FlexContainer
                                as="section"
                                style={{ justifyContent: 'space-between' }}
                            >
                                <Text as="h2" style={{ marginBottom: '1rem' }}>
                                    {task.title}
                                </Text>
                                <GhostButton
                                    as="button"
                                    style={{
                                        maxWidth: '5rem',
                                        fontSize: '.5rem',
                                        padding: '.5rem'
                                    }}
                                    onClick={() => handleRemoveTask(task.id)}
                                >
                                    Remover
                                </GhostButton>
                            </FlexContainer>

                            <Text
                                as="p"
                                style={{
                                    fontSize: '.75rem'
                                }}
                            >
                                {task.description}
                            </Text>

                            <hr
                                style={{
                                    width: '100%',
                                    border: 'solid .05rem #fff',
                                    margin: '.5rem 0',
                                    marginTop: '1.5rem'
                                }}
                            />

                            <FlexContainer
                                as="section"
                                style={{
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start'
                                }}
                            >
                                {task.categories.map((cat) => (
                                    <Text
                                        key={cat.id}
                                        as="label"
                                        style={{
                                            padding: '.5rem',
                                            margin: '0.5rem',
                                            borderRadius: '1rem',
                                            background: 'white',
                                            fontSize: '.5rem',
                                            color: '#0070f3'
                                        }}
                                    >
                                        {cat.title}
                                    </Text>
                                ))}
                            </FlexContainer>
                        </FlexContainer>
                    ))}
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

export default TaskList
