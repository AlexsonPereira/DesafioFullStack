import { ModalBackground } from '../ModalBackground/ModalBackground'

export const DeleteContactModal = ({ setModalDelete }: any) => {
  return (
    <ModalBackground>
      <div className="ModalConfirmDelete">
        <p>Deseja realmente apagar este contato?</p>
        <div>
          <button>Excluir</button>
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
