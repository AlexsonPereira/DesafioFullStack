import { ModalBackground } from '../ModalBackground/ModalBackground'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../validations/addContact'
import { Icon } from '@phosphor-icons/react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

interface IContact {
  phone: string
  email: string
  name: string
}

export const AddContactModal = ({ setModalAdd }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IContact>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: IContact) => {
    api
      .post('/contact', data)
      .then((res) => {
        toast.success('Contato Criado com sucesso')
        setModalAdd(false)
      })
      .catch((res) => {
        console.log(res)
        toast.error('Não foi possivel criar o contato')
      })
  }

  return (
    <ModalBackground>
      <form onSubmit={handleSubmit(onSubmit)} className="ModalAddContact">
        <div>
          <h2>Adicionar contato</h2>
          <p onClick={() => setModalAdd(false)}>X</p>
        </div>
        <label htmlFor="">Nome</label>
        <input {...register('name')} type="text" />
        <label htmlFor="">Email</label>
        <input {...register('email')} type="text" />
        <label htmlFor="">Telefone</label>
        <input {...register('phone')} type="text" />
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </ModalBackground>
  )
}
