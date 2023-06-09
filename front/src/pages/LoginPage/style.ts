import styled from 'styled-components'

export const SideFormLogin = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .BoxLoginForm {
    @media (max-width: 1050px) {
      background-color: #ffffff;
      padding: 32px;
      border-radius: 8px;
      position: relative;
    }

    > h1 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .FormLogin {
      max-width: 550px;
      min-width: 410px;
      border: 8px solid #61d2f1;
      border-radius: 8px;
      padding: 24px 24px;

      display: flex;
      flex-direction: column;
      align-items: center;

      > h2 {
        font-size: 2rem;
        font-weight: bold;
      }

      > label {
        width: 100%;
        max-width: 350px;
        min-width: 250px;
        font-size: 1rem;
        margin-top: 16px;
        margin-bottom: 8px;
      }

      > input {
        width: 100%;
        max-width: 350px;
        min-width: 250px;
        height: 50px;
        border-radius: 8px;
        border: 2px solid #61d2f1;
        background-color: #d9d9d9;
        padding: 20px 10px;

        ::placeholder {
          color: #000000;
        }
      }

      span {
        color: red;
        font-size: 0.7rem;
        align-self: flex-start;
        margin-top: 8px;
      }

      > div {
        width: 100%;
        max-width: 350px;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        margin-top: 16px;

        > button {
          background-color: #61d2f1;
          height: 50px;
          margin-bottom: 8px;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
        }

        > p {
          font-size: 0.9rem;
          text-align: center;

          > strong {
            cursor: pointer;
          }
        }
      }
    }
  }
`

export const ScreenLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 1050px) {
    background-color: #c8e4ec;
  }

  > img {
    @media (max-width: 1050px) {
      display: none;
    }
  }
`
