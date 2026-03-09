const tabs = ["All", "Open", "Complete"]

export default function AppHeader({list, click, setClick}){
    
    return(
        <header>
            <h1>Ingenious Tasks</h1>
            <div className="tabs">
                {tabs.map((tab, index)=>{
                  const numberOfTasks =  tab === 'All' ? list.length :
                    tab === 'Open' ? list.filter(value => !value.status).length :
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