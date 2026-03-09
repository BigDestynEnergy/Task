const tabs = ['All Tasks','Active Tasks', 'Completed Tasks']

export default function AppHeader({list, click, setClick}){
    
    return(
        <header>
            <h1>Ingenious Tasks</h1>
            <div className="tabs">
                {tabs.map((tab, index)=>{
                  const numberOfTasks =  tab === 'All Tasks' ? list.length :
                    tab === 'Active Tasks' ? list.filter(value => !value.status).length :
                    list.filter(val => val.status).length
                    return(
                    <button 
                    className={click === tab ? 'active' : {}}
                    onClick={()=>setClick(tab)}
                    key={index}>{tab}<span>({numberOfTasks})</span></button>
               )})}
            </div>
        </header>
    )
}