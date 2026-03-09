import './styles/App.css'
import './styles/App 2.css'
import AppHeader from './components/App Header'
import { useEffect, useState } from 'react'
import List from './components/List'
import Input from './components/Input'
import OpenInput from './components/Open Input'
import ParentApp from './components/parent'



export default function App(){
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('list');
    return saved ? JSON.parse(saved) : []
  })

  const [click, setClick] = useState('All')
  const [todo, setTodo] = useState('')
  const [openInput, setOpenInput] = useState(false)
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])

  const [openParent, setOPenParent] = useState(false)
  return(
    <div className="app">

      <ParentApp
      openParent={openParent}
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
  )
}