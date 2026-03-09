const tabs = [
    {label: 'Tasker', icon: '✅', id: 'tasker'},
    {label: 'W-0', icon: '🌦️', id: 'weather'},
    {label: 'Calculator', icon: '🧮', id: 'calc'},
    {label: 'Abantuverse', icon: '🦹🏽‍♀️', id: 'abantu'}
]

const colors = {
    background: '#111',
    color: '#fff'
}
export default function Tabs({setScreen, isSignedIn,openModal}){

    function changeScreens(id){
        if(id === 'tasker')setScreen('tasker');
        if(id === 'weather')openModal('This app is still under development');
        if(id === 'calc')openModal('This Calculator app is still under development');
        if(id === 'abantu')openModal('This comics app is still under development');
    }
    return(
        <div className="Tabs-Page">
            {!isSignedIn ? <div className="auth">
                <button onClick={()=>setScreen('login')}>sign in</button>
                <button onClick={()=>setScreen('create')} style={colors}>create account</button>
            </div> : ''}
            <h1>Ingenious Engine</h1>
            <span>This is a gateway to Ingenious Apps</span>
            <div className="home-tabs">
                {tabs.map((tab) => {

                    return(
                        <div className="tab"
                        onClick={()=>changeScreens(tab.id)}
                        key={tab.id}>
                            <div className="icon">{tab.icon}</div>
                            <h3>{tab.label}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}