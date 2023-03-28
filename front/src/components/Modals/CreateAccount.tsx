import { ModalBackground } from '../ModalBackground/ModalBackground'

export const CreateAccount = () => {
  return (
    <ModalBackground>
      <form className="CreateAccountForm">
        <div>
          <h2>Cadastro</h2>
          <p>X</p>
        </div>
        <label htmlFor="">Nome</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Senha</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Telefone</label>
        <input type="text" name="" id="" />
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </ModalBackground>
  )
}
