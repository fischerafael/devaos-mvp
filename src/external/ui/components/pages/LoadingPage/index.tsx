import { Text } from '../../../design-system/display/Text'
import { FlexContainer } from '../../../design-system/layout/FlexContainer'

const LoadingPage = () => {
    return (
        <FlexContainer style={{ minHeight: '100vh' }}>
            <Text as="h1">Carregando...</Text>
        </FlexContainer>
    )
}

export default LoadingPage
