import task from '../assets/Images/task.png'
import weather from '../assets/Images/Weather.png'
import superhero from '../assets/Images/Superhero.jpg'
import abacus from '../assets/Images/Ab.png'

const tabs = [
    {label: 'Tasker', icon: task, id: 'tasker'},
    {label: 'W-0', icon: weather, id: 'weather'},
    {label: 'Calculator', icon: abacus, id: 'calc'},
    {label: 'Abantuverse', icon: superhero, id: 'abantu'}
]

const colors = {
    background: '#111',
    color: '#fff'
}
export default function Tabs({setScreen, owner,isSignedIn,openModal}){

    function changeScreens(id){
        if(isSignedIn){
        if(id === 'tasker')setScreen('tasker');
        if(id === 'weather')openModal('This app is still under development');
        if(id === 'calc')setScreen('calc');
        if(id === 'abantu')openModal('This comics app is still under development');
    } else{
        openModal('You are not signed in. Sign in to continue')
    }
    }
    return(
        <div className="Tabs-Page">
            {!isSignedIn ? <div className="auth">
                <button onClick={()=>setScreen('login')}>sign in</button>
                <button onClick={()=>setScreen('create')} style={colors}>create account</button>
            </div> : <span>{owner}</span>}
            <h1>Ingenious Engine</h1>
            <span>This is a gateway to Ingenious Apps</span>
            <div className="home-tabs">
                {tabs.map((tab) => {

                    return(
                        <div className="tab"
                        onClick={()=>changeScreens(tab.id)}
                        key={tab.id}>
                            <img src={tab.icon} 
                            width={140}
                            className="icon" height={120}/>
                            <h3>{tab.label}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}