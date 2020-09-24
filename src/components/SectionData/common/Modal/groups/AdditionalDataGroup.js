import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import Input from '../groupElements/Input/Input';
import DatePicker from '../groupElements/DatePicker/DatePiker';
import Select from '../groupElements/Select/Select';


const AdditionalDataGroup = (props) => {
    
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

export default AdditionalDataGroup;