import { useState } from "react"


export default function Input({todo, setTodo,list, setList}){

    const [msg, setMsg] = useState('')

    function note(text){
        setMsg(text)
        setTimeout(()=>{
            setMsg('')
        },2000)
    }
    function handleAddition(){
        if(todo === '')note('Add a note')
            else if(todo.length < 8)note('Task too short')
        else{
    setList([...list, 
        {task: todo,
            id: Date.now(),
         status: false}])
    setTodo('')

}
    }
    return(
       <>
       <span className="note">{msg}</span>
        <div className="input-box">
            <input type="text"
            placeholder="Add new note" 
            value={todo}
            onKeyDown={(e)=>{
                if(e.key === 'Enter')handleAddition();
                else return
            }}
            onChange={(e)=>{setTodo(e.target.value)}}
            />

            <button onClick={()=>{handleAddition()}}>Add</button>
        </div>
       </>
    )
}