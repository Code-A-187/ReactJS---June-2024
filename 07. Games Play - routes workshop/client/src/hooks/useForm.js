import {useState} from 'react'

export function useForm(initialValues, submitCallback) {

    const [values, setValues] = useState(initialValues);
    
    // TODO: add suport for checkbox
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.taget.name]: e.target.value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);
    };

    return {
        values,
        changeHandler,
        submitHandler,
    };
}
