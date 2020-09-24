import React from 'react';
import Select from '../tags/Select/Select';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

const FormGroup = (props) => {
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
      ];
    return (
        <Form.Group as={Col} controlId="executor">
            <Form.Label>Ответственный исполнитель11111</Form.Label>
            <Select
                control='select'                          
                name='executor'
                options={dropdownOptions}
            />
        </Form.Group>
    );
}

export default FormGroup;