
export default function Weathero({setScreen}){
    return(
        <>
        <h1>This is a weather page from Weathero, a subsidiary of Ingenious</h1>
        <span>sorry we are under construction</span>
        <button onClick={()=>setScreen('tabs')}>Return to home page</button>
        </>
    )
}