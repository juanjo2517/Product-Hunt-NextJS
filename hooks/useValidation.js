import React, { useState, useEffect } from 'react';

const useValidation = (initialState, validate, fn) => {

    const [values, saveValues] = useState(initialState);
    const [errors, saveErrors] = useState({});
    const [submitForm, saveSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm){
            const notErrors = Object.keys(errors).length === 0;

            if(notErrors) {
                fn(); //Fn: Funcion que se ejecuta en el componente, puede ser login o lo que sea
                console.log('Entra create');
            }
            saveSubmitForm(false);
        }
    }, [errors]);
    
    
    const handleChange = e => {
        saveValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const errorsValidation = validate(values);
        saveErrors(errorsValidation);
        saveSubmitForm(true);
    }

    const handleBlur = () => {
        const errorsValidation = validate(values);
        saveErrors(errorsValidation); 
    }
    return { 
        values,
        errors,
        submitForm,
        handleChange,
        handleSubmit,
        handleBlur
    };
}
 
export default useValidation;