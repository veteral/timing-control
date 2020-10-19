import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import Input from '../elements/Input';
import DatePicker from '../elements/DatePicker';
import Select from '../elements/Select';


const BigForm = (props) => {

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
      ];   
    
    return (
        <>
             <Form.Row>
                <Form.Group as={Col} controlId="dateDoc">                    
                    <DatePicker
                        name='dateDoc'
                        label='Документ от:'
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="numberDoc">                    
                    <Input 
                        name={'numberDoc'} 
                        label={'Номер документа:'} 
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="typeDoc">                    
                    <Select                        
                        name='typeDoc'
                        label='Тип документа:'
                        options={dropdownOptions}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="employee">                    
                    <Select                        
                        name='employee'
                        label='Ответственный исполнитель:'
                        options={dropdownOptions}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="executionDate">                
                    <DatePicker
                        name='executionDate'
                        label='Контрольный срок:'
                    />                
            </Form.Group> 


            <Form.Group controlId="title">                
                <Input 
                    name={'title'} 
                    label='Наименование документа:' 
                />
            </Form.Group>

            <Form.Group controlId="text">                
                <Input
                    as="textarea"
                    rows="3"                    
                    name="text"
                    label='Дополнительная информация:'                    
                />
            </Form.Group>            
        </>
    );
}

export default BigForm;