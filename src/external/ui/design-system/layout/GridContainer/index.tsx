import styled from 'styled-components'

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1rem;

    width: 100%;
    height: 100%;
`
