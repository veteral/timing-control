import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import Input from '../elements/Input';


const ChangeNameForm = (props) => {
    
    return (
        <>
            <Form.Group controlId="name">                
                <Input 
                    name={'name'} 
                    label='Наименование:' 
                />
            </Form.Group>                   
        </>
    );
}

export default ChangeNameForm;