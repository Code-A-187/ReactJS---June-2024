import { useEffect, useState } from "react";

export default function ControlledForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });
    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
            const profile = await response.json();
        
            setUsername(profile.username)
        })();
    }, []);
    
    const formSubmitHandler = (e) => {
        e.preventDefault();
    }

    const usernameChangeHandler= (e) => {
        setUsername (e.target.value);
    }

    const 
    
    return (
        <>  
            <h1>Controlled Form</h1>
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name='username' 
                            id='username' 
                            value={username}
                            onChange={changeHansler}
                        />
                    </div>
    
                    <div>
                        <label htmlFor="passowrd">Password</label>
                        <input 
                            type="password" 
                            name='password' 
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
    
                    <div>
                        <input type="submit" value='Login'/>
                    </div>
                </form>
        </>
   );
}