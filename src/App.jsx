import './styles/App.css'
import './styles/App 2.css'
import AppHeader from './components/App Header'
import { useEffect, useState } from 'react'
import List from './components/List'
import Input from './components/Input'
import OpenInput from './components/Open Input'



export default function App(){
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('list');
    return saved ? JSON.parse(saved) : []
  })

  const [click, setClick] = useState('All Tasks')
  const [todo, setTodo] = useState('')
  const [openInput, setOpenInput] = useState(false)
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])
  return(
    <div className="app">
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