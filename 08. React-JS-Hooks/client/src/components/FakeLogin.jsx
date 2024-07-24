import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserContext from '../contexts/userContext';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    username: '',
    password: '',
}


function FakeLogin() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const loginSubmitHandler = ({ username, password }) => {
        login(username, password);
        navigate('/');
    }

    const {changeHandler, submitHandler, values } = useForm(initialValues, loginSubmitHandler)

    return (
        <Form style={{width: '500px', margin: '100px auto'}} onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Pancho"
                value ={values.username}
                name = 'username'
                onChange={changeHandler}
            />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password"
                value={values.password}
                name='password'
                onChange={changeHandler}
            />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
  );
}

export default FakeLogin;