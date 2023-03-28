import styled from 'styled-components'

export const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 428px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  @media (min-width: 728px) {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`
