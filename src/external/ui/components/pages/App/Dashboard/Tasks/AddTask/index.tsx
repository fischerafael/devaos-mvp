import React, { useState } from 'react'
import { Text } from '../../../../../../design-system/display/Text'
import Input from '../../../../../../design-system/entry/Input'
import { FlexContainer } from '../../../../../../design-system/layout/FlexContainer'
import CustomLink from '../../../../../molecules/CustomLink'

export const AddTask = () => {
    const catgoriesList = [
        { name: 'Frontend', id: '60759a1dc596cfa438f7a8d0' },
        { name: 'Backend', id: '60759a18c596cfa438f7a8cf' },
        { name: 'Design', id: '60759a27c596cfa438f7a8d1' }
    ]

    const [categories, setCategories] = useState([])

    console.log('categorias', categories)

    const handleSelectItem = function (id: string) {
        const alreadySelected = categories.find((item) => item === id)
        if (alreadySelected) {
            setCategories(categories.filter((item) => item !== id))
            return
        }
        setCategories([...categories, id])
    }

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
                    value={'data.title'}
                    onChange={() => {}}
                    onBlur={() => {}}
                />
                <Input
                    label="Descrição"
                    error="Mínimo 3 caracteres"
                    type="textarea"
                    id="title"
                    value={'data.title'}
                    onChange={() => {}}
                    onBlur={() => {}}
                />
                <br />
                <FlexContainer as="div">
                    {catgoriesList.map((cat) =>
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
