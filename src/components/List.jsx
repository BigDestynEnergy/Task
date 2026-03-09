import { useState, useEffect, useRef } from "react";

export default function List({list, setList, click}){
    const [menu, setMenu] = useState({
        visible: false,
        x:0,
        y:0,
        taskId: null
    })

    function handleContextMenu(e, taskId){
        e.preventDefault();
        e.stopPropagation()

        setMenu({
            visible: true,
            x: e.currentTarget.getBoundingClientRect().right,
            y: e.currentTarget.getBoundingClientRect().top,
            taskId: taskId
        })
    }

    const lastTaskRef = useRef(null)
   
    useEffect(()=>{
        function closeMenu(){
            setMenu((prev) => ({...prev, visible: false}));
        }
              window.addEventListener('click', closeMenu)

            return () => window.removeEventListener('click', closeMenu);
        
    }, [])

    useEffect(() => {
  if (lastTaskRef.current) {
    lastTaskRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }
}, [list]);

   { /*function deleteTask(id){
        const updatedList = list.filter((task) => task.id !==id);
        setList(updatedList);
        setMenu((prev)=>({...prev, visible: false}));
    } */}

    function deleteTask(id){
    setList(prev => prev.filter(task => task.id !== id));
    setMenu(prev => ({...prev, visible:false}));
    }

 function editTask(id){
    const taskToEdit = list.find(task => task.id === id)

    const newText = prompt('Edit Task', taskToEdit.task);

    if(!newText || newText.trim() === '') return;

    const updatedList = list.map(task => {
        if(task.id === id){
            return {...task, task: newText, edited: true, editedAt: Date.now()}
        }

        return task
    })

    setList(updatedList)
    setMenu(prev => ({...prev, visible:false}))
}

    const formatTime = (ms) => {
  const date = new Date(ms);
  return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

    function toggleStatus(id){
        const updatedList = list.map((task)=>{
            if(task.id === id){
                return{...task, status: !task.status}
            }

            return task;
        })

        setList(updatedList);
        setMenu((prev) => ({...prev, visible: false}))
    }

    let filteredList = list;

    if(click === 'Active Tasks'){
        filteredList = list.filter((task) => task.status === false);
    }

    if(click === 'Completed Tasks'){
        filteredList = list.filter((task) => task.status === true)
    }

    return(
        <div className="todos">
            <div className="items">
                {filteredList.length === 0 ? (
                    <p className="no-task">No Tasks Here</p>
                ) : (
                    filteredList.map((item, index) => (
                        <div 
                        key={item.id}
                        ref={index === filteredList.length -1 ? lastTaskRef : null}
                       className="item">
                            
                            <div className="task-container">

                                {item.editedAt && (
                            <span className="edited-tag">
                                Edited at {formatTime(item.editedAt)}
                            </span>
                            )}
                        <span className="task-itself">{item.task}</span>
                                </div>
                            <div className="left">
                                   <span>{item.status ? "✅" : "❌"}</span>
                                <div
                                    className="ham-menu"
                                    title="right click to open menu"
                                    onClick={(e) => handleContextMenu(e, item.id)}
                                    >
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                         </div>
                    ))
                )}
            </div>

            {menu.visible && (
        <div
          className="context-menu"
          style={{
            position: "absolute",
            top: menu.y,
            left: menu.x
          }}
        >
            <button
            onClick={()=>toggleStatus(menu.taskId)}
            >
            Done
          </button>
            <button
            onClick={()=>{
                editTask(menu.taskId)
            }}
            >
            Edit Task
          </button>
          <button onClick={() => deleteTask(menu.taskId)}>
            Delete Task
          </button>
          
        </div>
      )}
        </div>
    )
}