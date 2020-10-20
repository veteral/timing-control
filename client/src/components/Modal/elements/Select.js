import React from 'react';
import { Field } from 'formik';
import { Form } from 'react-bootstrap';

function Select ( {name, label, options} ) {
  
  return (
    <>    
      <Form.Label>{label}</Form.Label> 
      <Field as='select' id={name} name={name} className={`form-control`}>      
        {options.map(option => {
          return (
            <option key={option.id} id={option.id} value={option.id} >
              {option.name}
            </option>
          )
        })}
      </Field>      
    </>
  )
}

export default Select