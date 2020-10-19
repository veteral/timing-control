import React from 'react';
import { Field } from 'formik';
import { Form } from 'react-bootstrap';


const Input = ({name, label, ...res}) => {
    return (
        <>
            <Form.Label>{label}</Form.Label>
            <Field id={name} name={name} className={'form-control'} {...res} />
        </>
    );
}

export default Input;