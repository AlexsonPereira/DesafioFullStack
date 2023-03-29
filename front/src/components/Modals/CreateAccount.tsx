import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../validations/registerUser'
import { ModalBackground } from '../ModalBackground/ModalBackground'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

interface IRegisterForm {
  email: string
  password: string
  name: string
  phone: string
}

export const CreateAccount = ({ setIsModal }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: IRegisterForm) => {
    api
      .post('/users', data)
      .then((res) => {
        toast.success('Sucesso ao realizar cadastro')
      })
      .catch((err) => {
        toast.error('Erro ao realizar cadastro')
      })
  }
  return (
    <ModalBackground>
      <form onSubmit={handleSubmit(onSubmit)} className="CreateAccountForm">
        <div>
          <h2>Cadastro</h2>
          <p onClick={() => setIsModal(false)}>X</p>
        </div>
        <label>Nome</label>
        <input {...register('name')} placeholder="Insira seu nome" type="text" />
        <span>{errors.name?.message}</span>
        <label>Email</label>
        <input {...register('email')} placeholder="Insira seu email" type="text" />
        <span>{errors.email?.message}</span>
        <label>Senha</label>
        <input {...register('password')} placeholder="Insira sua senha" type="text" />
        <span>{errors.password?.message}</span>
        <label>Telefone</label>
        <input {...register('phone')} placeholder="Insira seu telefone" type="text" />
        <span>{errors.phone?.message}</span>
        <button type="submit">Cadastrar</button>
      </form>
    </ModalBackground>
  )
}
