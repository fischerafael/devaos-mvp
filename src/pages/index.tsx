import { Text } from '../external/ui/design-system/display/Text'
import { FlexContainer } from '../external/ui/design-system/layout/FlexContainer'

export default function Home() {
    return (
        <FlexContainer as="main" style={{ flexDirection: 'column' }}>
            <FlexContainer
                as="section"
                style={{
                    minHeight: '100vh',
                    flexDirection: 'column',
                    padding: '1rem',
                    maxWidth: '900px'
                }}
            >
                <Text as="h1" style={{ fontSize: '5rem' }}>
                    DEV AOS
                </Text>
                <Text as="h2">
                    O ponto de encontro de quem resolveu migrar para tecnologia
                </Text>
            </FlexContainer>
        </FlexContainer>
    )
}
