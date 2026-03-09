const active = {transform: 'rotate(45deg)'}
const deactive = {transform: 'rotate(0deg)'}
export default function OpenInput({setOpenInput, openInput}){

    return(
        <button 
        title="Add Task"
        style={openInput ? active : deactive}
        onClick={()=>setOpenInput(!openInput)}
        className="open">+</button>
    )
}