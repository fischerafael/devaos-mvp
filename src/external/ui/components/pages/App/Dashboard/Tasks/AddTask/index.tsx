import { Text } from '../../../../../../design-system/display/Text'
import { MainButton } from '../../../../../../design-system/entry/Button'
import { FlexContainer } from '../../../../../../design-system/layout/FlexContainer'

import Input from '../../../../../../design-system/entry/Input'
import CustomLink from '../../../../../molecules/CustomLink'

import { useAddTask } from '../useAddTask'

export const AddTask = () => {
    const {
        data,
        handleChange,
        categories,
        handleSelectItem,
        CATEGORIES_LIST,
        handleCreateTask
    } = useAddTask()

    return (
        <FlexContainer
            as="main"
            style={{ minHeight: '100vh', flexDirection: 'column' }}
        >
            <FlexContainer
                as="section"
                style={{
                    flexDirection: 'column',
                    background: '#FAFAFA',
                    padding: '2rem',
                    margin: '1rem',
                    maxWidth: '350px'
                }}
            >
                <Text as="h1" style={{ fontSize: '1rem' }}>
                    O que você fez?
                </Text>
                <br />
                <Input
                    label="Título da tarefa"
                    error="Mínimo 3 caracteres"
                    type="text"
                    id="title"
                    value={data.title}
                    onChange={handleChange}
                />
                <Input
                    label="Descrição"
                    error="Mínimo 3 caracteres"
                    type="textarea"
                    id="description"
                    value={data.description}
                    onChange={handleChange}
                />
                <br />
                <FlexContainer as="div">
                    {CATEGORIES_LIST.map((cat) =>
                        categories.includes(cat.id) ? (
                            <Text
                                key={cat.id}
                                as="label"
                                style={{
                                    padding: '.5rem 1rem',
                                    margin: '0 0.5rem',
                                    borderRadius: '1rem',
                                    background: '#0070f3',
                                    fontSize: '.5rem',
                                    color: 'white'
                                }}
                                onClick={() => handleSelectItem(cat.id)}
                            >
                                {cat.name}
                            </Text>
                        ) : (
                            <Text
                                key={cat.id}
                                as="label"
                                style={{
                                    padding: '.5rem 1rem',
                                    margin: '0 0.5rem',
                                    borderRadius: '1rem',
                                    background: 'lightGrey',
                                    fontSize: '.5rem',
                                    color: 'white'
                                }}
                                onClick={() => handleSelectItem(cat.id)}
                            >
                                {cat.name}
                            </Text>
                        )
                    )}
                </FlexContainer>
                <br />
                <MainButton as="button" onClick={handleCreateTask}>
                    Adicionar tarefa
                </MainButton>
            </FlexContainer>
            <CustomLink
                href="/app/dashboard/tasks"
                style={{
                    marginTop: '1rem',
                    textDecoration: 'none',
                    fontSize: '.75rem',
                    fontWeight: 'bold'
                }}
            >
                <Text as="span" style={{ color: '#0070f3' }}>
                    Voltar
                </Text>
            </CustomLink>
        </FlexContainer>
    )
}
