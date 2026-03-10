
const styles = {
background: '#111',
padding:'8px',
borderRadius: '8px',
width: '300px',
color: '#1db954'
}



export default function Create( {setOwner,openModal,setIsSignedIn,hide, emailC,setScreen,passwordC, setEmailC, setPasswordC, setHide, user, setUser, message, setMessage} ){

         function showMsg(text){
        setMessage(text);
        setTimeout(()=>{
            setMessage('')
        }, 2000)
    }

function passwordVerification(){
   if(!/[A-Z]/.test(passwordC)){
        showMsg('Add an uppercase letter');
        return false;
   }
   else if(!/[a-z]/.test(passwordC)){
        showMsg('Add a lowercase letter');
        return false;
   }
   else if(!/\d/.test(passwordC)){
        showMsg('Add at least 1 digit');
        return false;
   }
   else if(!/[^A-Za-z0-9]/.test(passwordC)){
        showMsg('Add a special character');
        return false;
   }

   return true;
}

  function handleCreate(){
    if(!user.trim()){
        showMsg('Enter your name');
         return}

    else if(/\d/.test(user)) showMsg('Name cannot contain numbers')

    else if(!emailC.trim()) showMsg('Enter your email')

    else if(!passwordC.trim()) showMsg('Create a password')

    else if(!passwordVerification()) return

    else{
        setOwner(user)
        setUser('')
        setEmailC('')
        setPasswordC('')
        showMsg('Account created successfully')

        setTimeout(()=>{
            setScreen('tabs')
            openModal(`Welcome to Ingenious ${emailC}`)
            setIsSignedIn(true)
        },2000)
    }
}  
    return(
    <div className="login">

         <form onSubmit={(e)=>{e.preventDefault()
            handleCreate();
        }}>
            <h3>Lets finish up</h3>

            <span style={message ? styles : {}}>{message} </span>
            <input type="text" value={user} placeholder="Enter your name" onChange={(e)=>{setUser(e.target.value)}} />
             
            <input type="email" value={emailC} placeholder="Enter your email" onChange={(e)=>{setEmailC(e.target.value)}} />
             <input type={hide ? 'text' : 'password'} value={passwordC} placeholder="Enter your password" onChange={(e)=>{setPasswordC(e.target.value)}} />
             <div className="show">
                <input type="checkbox" onClick={()=>{setHide(prev => !prev)}}/>
                <span>{hide ? 'Hide Password' : 'Show Password'}</span>
             </div>
             <button>create account</button>
             <hr />
             <div>Already have an account? <i onClick={()=>setScreen('login')}>log in</i> instead</div>
        </form>
    
    </div>   
    )
}