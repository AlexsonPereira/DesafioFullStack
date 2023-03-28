import styled from 'styled-components'

export const ContactCardStyle = styled.li`
  width: 350px;
  padding: 32px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div {
    display: flex;
    justify-content: center;
    gap: 64px;

    > svg {
      font-size: 32px;
      cursor: pointer;
    }
  }
`
