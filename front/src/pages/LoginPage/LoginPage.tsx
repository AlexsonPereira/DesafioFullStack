import { useEffect, useState } from 'react'
import bg from '../../assets/PhotoInitialPage.png'
import { yupResolver } from '@hookform/resolvers/yup'
import { ScreenLogin, SideFormLogin } from './style'
import { CreateAccount } from '../../components/Modals/CreateAccount'
import { useForm } from 'react-hook-form'
import { schema } from '../../validations/loginUser'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface ILoginForm {
  email: string
  password: string
}

export const LoginPage = () => {
  const [isModal, setIsModal] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate()

  const onSubmit = (data: ILoginForm) => {
    api
      .post('/login', data)
      .then((res) => {
        toast.success('Login realizado com sucesso')

        localStorage.setItem('@Contact-Token', res.data.token)
        navigate('home')
      })
      .catch((err) => {
        toast.error('Erro ao realizar login')
      })
  }

  useEffect(() => {
    if (localStorage.getItem('@Contact-Token')) {
      navigate('home')
    }
  }, [])

  return (
    <>
      <ScreenLogin>
        <img src={bg} alt="Planta samabaia" />
        <SideFormLogin>
          <div className="BoxLoginForm">
            <h1>ContactAPP</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="FormLogin">
              <h2>Login</h2>
              <label htmlFor="">Email</label>
              <input {...register('email')} placeholder="Insira seu email " type="text" />
              <span>{errors.email?.message}</span>
              <label htmlFor="">Senha</label>
              <input {...register('password')} placeholder="Insira sua senha" type="text" />
              <span>{errors.password?.message}</span>
              <div>
                <button type="submit">Entrar</button>
                <p>
                  Ainda não tem cadastro? <strong onClick={() => setIsModal(true)}>faça seu registro aqui</strong>
                </p>
              </div>
            </form>
          </div>
        </SideFormLogin>
      </ScreenLogin>
      {isModal && <CreateAccount setIsModal={setIsModal} />}
    </>
  )
}
