import { Container } from '../../components/container'
import { HomePageStyle } from './style'
import { Trash, Pen } from '@phosphor-icons/react'
import { ContactCard } from '../../components/ContactCard/ContactCard'
import { ModalBackground } from '../../components/ModalBackground/ModalBackground'
import { useEffect, useState } from 'react'
import { AddContactModal } from '../../components/Modals/AddContact'
import { DeleteContactModal } from '../../components/Modals/DeleteContact'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

interface IUser {
  name: string
  phone: string
  id: string
  createdAt: string
  email: string
}

export interface IContact {
  id: string
  name: string
  phone: string
  createdAt: string
  email: string
}

export const HomePage = () => {
  const [ModalAdd, setModalAdd] = useState(false)
  const [ModalDelete, setModalDelete] = useState(false)
  const [contactList, setContactList] = useState<IContact[]>()
  const [contactIdModal, setContactIdModal] = useState<string>()
  const [user, setUser] = useState<IUser>()

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    api
      .get('/users')
      .then((res) => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch((res) => {
        localStorage.clear()
        navigate('/')
      })
  }, [])

  useEffect(() => {
    api
      .get('/contact')
      .then((res) => {
        console.log(res.data)
        setContactList(res.data)
      })
      .catch((res) => {
        localStorage.clear()
        navigate('/')
      })
  }, [ModalDelete, ModalAdd])

  return (
    <HomePageStyle>
      <div className="HeaderBg">
        <Container>
          <div className="Header">
            <h3>{user?.name}</h3>
            <h3 id="ExitBtn" onClick={logout}>
              Sair
            </h3>
          </div>
        </Container>
      </div>
      <Container>
        <div className="HeaderContent">
          <h2>Meus Contatos</h2>
          <button onClick={() => setModalAdd(true)}>Add Contato+</button>
        </div>
        <div>
          <ul className="ContactList">
            {contactList?.length == 0 ? <h2 style={{ color: '#FFFFFF' }}>Você não tem contatos adicionados</h2> : null}
            {contactList?.map((e) => {
              return <ContactCard setContactIdModal={setContactIdModal} contactsDetails={e} setModalDelete={setModalDelete} />
            })}
          </ul>
        </div>
      </Container>
      {ModalAdd && <AddContactModal setModalAdd={setModalAdd} />}
      {ModalDelete && <DeleteContactModal contactIdModal={contactIdModal} setModalDelete={setModalDelete} />}
    </HomePageStyle>
  )
}
