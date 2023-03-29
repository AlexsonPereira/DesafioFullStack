import styled from 'styled-components'

export const ModalBGStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: #00000050;

  .CreateAccountForm {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;

    > span {
      color: red;
      font-size: 0.7rem;
      align-self: flex-start;
      margin-top: 8px;
    }

    > button {
      width: 100%;
      background-color: #61d2f1;
      height: 50px;
      margin-top: 8px;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
    }

    > label {
      width: 100%;
      font-size: 0.9rem;
      margin-top: 16px;
      margin-bottom: 8px;
    }

    > input {
      width: 100%;
      max-width: 250px;
      min-width: 350px;
      height: 50px;
      border-radius: 8px;
      border: 2px solid #61d2f1;
      background-color: #d9d9d9;
      padding: 20px 10px;
    }

    div {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 2rem;
        cursor: pointer;
      }

      :nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  .ModalAddContact {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: #ffffff;
    padding: 16px;
    border-radius: 8px;
    button {
      width: 100%;
      background-color: #61d2f1;
      height: 50px;
      margin-bottom: 8px;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > p {
        font-weight: bold;
        cursor: pointer;
      }
    }

    > label {
      width: 100%;
      font-size: 1rem;
      margin-top: 16px;
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
  }

  .ModalConfirmDelete {
    background-color: #ffffff;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 8px;

    > div {
      display: flex;
      justify-content: flex-end;
      gap: 8px;

      > button {
        width: 100px;
        height: 30px;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        font-weight: bold;

        :nth-child(1) {
          background-color: #ff0000;
          color: #ffffff;
        }
      }
    }
  }
`
