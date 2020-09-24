import React from 'react';
import { Field } from 'formik';
import { Form } from 'react-bootstrap';


const Input = (props) => {
    return (
        <>
            <Form.Label>{props.title}</Form.Label>
            <Field id={props.name} name={props.name} className={'form-control'} />
        </>
    );
}

export default Input;