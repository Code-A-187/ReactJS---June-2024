import { useEffect, useState } from "react";

export default function ControlledForm() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        email: '',
        age: '',
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

    const  changeHandler = (e) => {
        setFormValues(oldValues => ({
            ...oldValues, [e.target.name]: e.target.value
        }))
    }
    
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
                            placeholder="Jane Doe"
                            value={formValues.username}
                            onChange={changeHandler}
                        />
                    </div>
    
                    <div>
                        <label htmlFor="passowrd">Password</label>
                        <input 
                            type="password" 
                            name='password' 
                            id="password"
                            placeholder="*******"
                            value={formValues.password}
                            onChange={changeHandler}
                        />
                    </div>

                    
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            name='email' 
                            id="email"
                            placeholder="jane.doe@gmail.com"
                            value={formValues.email}
                            onChange={changeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="age">E-mail</label>
                        <input 
                            type="number" 
                            name='age' 
                            id="age"
                            placeholder="18"
                            value={formValues.age}
                            onChange={changeHandler}
                        />
                    </div>
    
                    <div>
                        <input type="submit" value='Login'/>
                    </div>
                </form>
        </>
   );
}