import { useEffect, useState, useRef } from "react";

const dotsStyle = {
    zIndex: 20,
    display: 'grid',
    cursor: 'pointer',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #111',
    gap: '4px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    width: '40px',
    height: '40px',
    padding: '4px',
    position: 'fixed',
    top: '10px',
    left: '10px',
    background: 'transparent',
};

const dotStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: '#111',
    borderRadius: '50%',
};

const buttons = [
    { btn: 'Tasker', id: 'tasker' },
    { btn: 'Weathero', id: 'weather' },
    { btn: 'Calculator', id: 'calc' },
    { btn: 'Abantuverse', id: 'abantu' },
    { btn: 'Exit', id: 'exit' }
];

export default function ParentApp({setScreen}) {
    const [visible, setVisible] = useState(false);
    const menuRef = useRef(null);
    const dotsRef = useRef(null);

   
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current && !menuRef.current.contains(e.target) &&
                dotsRef.current && !dotsRef.current.contains(e.target)
            ) {
                setVisible(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    function handleRedirect(id){
        if(id === 'tasker'){
            let query = prompt('This site is attempting to open an external site. Are you sure? (yes/no)')

            if(query.toLocaleLowerCase() === 'yes'){
                window.open('https://ingenious-tasker.vercel.app')
            } else if(query.toLocaleLowerCase() === 'no')return;
            else{
                alert('Enter valid command')
            }
        }
        if(id==='weather'){alert('Weather app under implementation')}

        if(id==='calc'){alert('Calculator app under implementation')}

        if(id==='abantu'){alert('Comics app under implementation')}

        if(id === 'exit'){
            setScreen('tabs')
        }
    }


    return (
        <div>
            <div ref={dotsRef} style={dotsStyle} onClick={() => setVisible(!visible)}>
                <div style={{ display: 'contents' }}>
                    <div style={dotStyle}></div>
                    <div style={dotStyle}></div>
                    <div style={dotStyle}></div>
                    <div style={dotStyle}></div>
                </div>
            </div>

            {visible && (
                <nav
                    ref={menuRef}
                    style={{
                        position: 'absolute',
                        top: '50px',
                        left: '10px',
                        color: '#fff',
                        background: '#111',
                        border: '1px solid #111',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '8px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                        zIndex: 25,
                        minWidth: '150px',
                    }}
                >
                    <h2 style={{ fontSize: '1rem', marginBottom: '8px' }}>
                        Visit Other Ingenious Apps
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {buttons.map((button) => (
                            <button
                            onClick={()=>{handleRedirect(button.id)}}
                                key={button.id}
                                className="parent-button">
                                {button.btn}
                            </button>
                        ))}
                    </div>
                </nav>
            )}
        </div>
    );
}