import { api } from '../../services/api'
import { ModalBackground } from '../ModalBackground/ModalBackground'
import { toast } from 'react-toastify'

export const DeleteContactModal = ({ setModalDelete, contactIdModal }: any) => {
  const deleteContact = () => {
    api
      .delete(`/contact/${contactIdModal}`)
      .then((res) => {
        toast.success('Contato deletado com sucesso')
        setModalDelete(false)
      })
      .catch((err) => {
        toast.error('Erro ao deletar contato')
      })
  }

  return (
    <ModalBackground>
      <div className="ModalConfirmDelete">
        <p>Deseja realmente apagar este contato?</p>
        <div>
          <button
            onClick={() => {
              deleteContact()
            }}
          >
            Excluir
          </button>
          <button
            onClick={() => {
              setModalDelete(false)
            }}
          >
            Voltar
          </button>
        </div>
      </div>
    </ModalBackground>
  )
}
