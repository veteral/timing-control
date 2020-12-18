import React from 'react';
import { Form, Col } from 'react-bootstrap';

import Input from '../elements/Input';
import DatePicker from '../elements/DatePicker';
import Select from '../elements/Select';


const ChangeDocumentForm = (props) => {
    
      console.log('Big Form - values', props);
    
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
                <Form.Group as={Col} controlId="type">                    
                    <Select                        
                        name='type'
                        label='Тип документа:'
                        options={props.type}
                        
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="employee">                    
                    <Select                        
                        name='employee'
                        label='Ответственный исполнитель:'
                        options={props.employee}
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

export default ChangeDocumentForm;