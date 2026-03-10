const styles = {
background: '#111',
padding:'8px',
borderRadius: '8px',
width: '300px',
color: '#1db954'
}

export default function Login( {hide, setOwner,openModal,setIsSignedIn,setScreen,email, message, setMessage, password, setEmail, setPassword, setHide} ){
   
     function showMsg(text){
        setMessage(text);
        setTimeout(()=>{
            setMessage('')
        }, 2000)
    }

    function handleLogin(){
        if(email === '')showMsg('Enter your email');
        else if(password === '')showMsg('Enter your password')
        else if(password.length < 8)showMsg('Password must include at least 8 characters');
        else(
             openModal(`Welcome to Ingenious ${email}`),
            setOwner(email),
            showMsg('Login successful. Please wait...'),
           
            setTimeout(()=>{
                setScreen('tabs');
                setIsSignedIn(true)
                setPassword(''),
            setEmail('')
            }, 2000)
        )

    }
    return(
       <div className="login">
         <form onSubmit={(e)=>{e.preventDefault();
            handleLogin();
        }}>
            <h3>Login to continue</h3>
            <span style={message ? styles : {}}>{message}</span>
            <input type="email" value={email} placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} />
             <input type={hide ? 'text' : 'password'} value={password} placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}} />
             <div className="show">
                <input type="checkbox" onClick={()=>{setHide(!hide)}}/>
                <span>{hide ? 'Hide Password' : 'Show Password'}</span>
             </div>
             <button>log in</button>
             <hr />
             <div>Don't have an account? <i onClick={()=>setScreen('create')}>create new account</i></div>
        </form>
       </div>
    )
}