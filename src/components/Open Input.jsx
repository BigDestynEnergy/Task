import add from '../assets/Images/add.svg'

const active = {transform: 'rotate(45deg)'}
const deactive = {transform: 'rotate(0deg)'}
export default function OpenInput({setOpenInput, openInput}){

    return(
        <div 
        title="Add Task"
        style={openInput ? active : deactive}
        onClick={()=>setOpenInput(!openInput)}
        className="open">
            <img src={add} className="plus" />
        </div>
    )
}