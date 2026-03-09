import './styles/App.css'
import './styles/Modal.css'
import './styles/App 2.css'
import AppHeader from './components/App Header'
import { useEffect, useState } from 'react'
import List from './components/List'
import Input from './components/Input'
import OpenInput from './components/Open Input'
import ParentApp from './components/parent'
import Tabs from './components/Tabs'
import Weathero from './components/weathero'
import Calc from './components/Calculator'
import Abantuverse from './components/Abantu'
import ShowNote from './components/note'
import Login from './components/Login'
import Create from './components/create'



export default function App(){
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('list');
    return saved ? JSON.parse(saved) : []
  })
  const [modal, setModal] = useState({
    visible: false,
    content: null,
  })

  const [currentUser, setCurrentUser] = useState(null)

  const [click, setClick] = useState('All')
  const [todo, setTodo] = useState('')
  const [openInput, setOpenInput] = useState(false)
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])

  const [openParent, setOPenParent] = useState(false)
  const [screen, setScreen] =useState('tabs')


  /* LOGIN AUTH */

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hide, setHide] = useState(false)


    const [emailc, setEmailc] = useState('')
  const [passwordc, setPasswordc] = useState('')
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)


  /* LOGIN AUTH */


  function openModal(content){
    setModal({
      visible: true,
      content: content
    })
  }

  function closeModal(){
    setModal({
      visible: false,
      content: null
    })
  }


  return(
    <div className="app">

       <ShowNote 
          openModal={openModal}
          closeModal={closeModal}
          modal={modal}/>


      {screen === 'tabs' &&(
        <>
          <Tabs 
          openModal={openModal}
          isSignedIn={isSignedIn}
          setScreen={setScreen}/>
        </>
      )}

      {screen === 'tasker' &&(
        <div className="App">
          <ParentApp
      openParent={openParent}
      setScreen={setScreen}
      setOPenParent={setOPenParent}
      />
      <AppHeader
      click={click}
      setClick={setClick}
      list={list}
      setList={setList}
      />

      <List
      list={list}
      click={click}
      setList={setList}

      />

      {openInput ? <Input
      list={list}
      todo={todo}
      setList={setList}
      setTodo={setTodo}
      /> : ''}

      <OpenInput 
      openInput={openInput}
      setOpenInput={setOpenInput}
      />
        </div>
      )}

      {screen === 'abantu' &&(
        <>
        <Abantuverse setScreen={setScreen} />
        </>
      )}

      {screen === 'weather' &&(
        <>
        <Weathero setScreen={setScreen}/>
        </>
      )}

      {screen === 'calc' &&(
        <>
        <Calc setScreen={setScreen} />
        </>
      )}

      {screen === 'login' && (
        <>
        <Login
        setEmail={setEmail}
        setPassword={setPassword}
        setHide={setHide}
        email={email}
        hide={hide}
        setScreen={setScreen}
        message={message}
        openModal={openModal}
        setMessage={setMessage}
        setIsSignedIn={setIsSignedIn}
        setCuurentUser={setCurrentUser}
        password={password}
        />
        </>
      )}


            {screen === 'create' && (
        <>
    <Create
  setEmailC={setEmailc}
  setPasswordC={setPasswordc}
  message={message}
  setMessage={setMessage}
  currentUser={currentUser}
  user={user}
  setUser={setUser}
  setHide={setHide}
  openModal={openModal}
  setIsSignedIn={setIsSignedIn}
  setCurrentUser={setCurrentUser}
  emailC={emailc}
  hide={hide}
  passwordC={passwordc}
  setScreen={setScreen}
/>
        </>
      )}
    </div>
  )
}