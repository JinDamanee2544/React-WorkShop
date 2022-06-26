import { useState } from 'react';
import './Form.css'
const Form = () => {
    const [username,setUsername]        = useState('');
    const [email,setEmail]              = useState('');
    const [password,setpassword]        = useState('');
    const [repassword,setrepassword]    = useState('');
    
    const [errorUsername,setErrorUsername]          = useState('');
    const [errorEmail,setErrorEmail]                = useState('');
    const [errorPassword,setErrorPassword]          = useState('');
    const [errorRePassword,setErrorRePassword]      = useState('');

    const [usernameColor,setUsernameColor]      = useState('')
    const [emailColor,setEmailColor]            = useState('')
    const [passwordColor,setPasswordColor]      = useState('')
    const [repasswordColor,setRepasswordColor]  = useState('')

    const validateForm = (e) => {
        e.preventDefault();
        if(username.length>8){
            setErrorUsername('');
            setUsernameColor('green')
        } else {
            setErrorUsername('Username must be more than 8 charecter');
            setUsernameColor('red')
        }
        if(email.includes('@')){
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail('Email Formatting is incorrect')
            setEmailColor('red')
        }
        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        } else {
            setErrorPassword('Password must be more than 8 charecter')
            setPasswordColor('red')
        }
        if(repassword!= "" && repassword === password){
            setErrorRePassword('');
            setRepasswordColor('green')
        } else {
            setErrorRePassword('Your Password is incorrrect')
            setRepasswordColor('red')
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Register Form</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} style={{
                        borderColor:usernameColor
                        }}/>
                    <small style={{color:usernameColor}}>{errorUsername}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{
                        borderColor:emailColor
                    }} />
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} style={{
                        borderColor:passwordColor
                    }} />
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="password" value={repassword} onChange={(e)=>setrepassword(e.target.value)} style={{
                        borderColor:repasswordColor
                    }}/>
                    <small style={{color:repasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form;