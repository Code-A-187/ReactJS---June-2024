import { useForm} from '../hooks/useForm';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ArticleCreate() {
    
    const initialFormValues = {
        title: '',
        content: '',
    }

    const formSubmitHandler = (values) => {
        console.log('Form submitted');
        console.log(values);
    };
    
    const { values, changeHandler, submitHandler } = useForm(initialFormValues, formSubmitHandler)

    return (
        <div>
            <Form style={{width: '500px', margin: '100px auto'}} onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        name='title'
                        placeholder="Article name"
                        value={values.title}
                        onChange={changeHandler}
                     />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name='content'
                        value={values.content}
                        onChange={changeHandler}
                        rows={3} 
                        placeholder='Once upon a time...'
                    />
                </Form.Group>
                <Form.Group>
                    <Button type='submit' variant="success">Create</Button>
                </Form.Group>
            </Form>
        </div>
    ); 
    
}