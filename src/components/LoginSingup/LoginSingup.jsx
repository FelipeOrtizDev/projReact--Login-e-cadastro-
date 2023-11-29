import React, { useState } from 'react'
import './LoginSingup.css'
import user_icon from './Img/person.png'
import email_icon from './Img/email.png'
import password_icon from './Img/password.png'


function LoginSingup() {

    const [action, setAction] = useState("Entrar");

    


    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div className="text">
                        {action}
                    </div>
                    <div className="underline">

                    </div>
                </div>
                <div className="inputs">
                    {action === "Entrar" ? <div></div> : <div  className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name' />

                    </div>}
                    {action === "Entrar" ? <div><div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id' />

                    </div></div> : <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id' />

                    </div>}
                    {action === "Entrar" ? <div><div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password' />

                    </div></div> : <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password' />

                    </div>}
                    

                </div>
                {action === "Cadastrar"? <div> </div> : <div className="forgot-password">
                    Esqueceu a senha? <span>Clica Aqui!</span>
                </div> }
                

                <div className="submit-container">
                    <div className={action === "Entrar" ? "submit gray" : "submit"} onClick={() => { setAction("Cadastrar") }}>
                        Cadastrar
                    </div>
                    <div className={action === "Cadastrar" ? "submit gray" : "submit"} onClick={() => { setAction("Entrar") }} >
                        Entrar
                    </div>

                </div>
                
            </div>
        </>

    )
}

export default LoginSingup