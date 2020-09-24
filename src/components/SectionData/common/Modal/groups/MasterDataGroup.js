import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import Input from '../groupElements/Input/Input';
import DatePicker from '../groupElements/DatePicker/DatePiker';
import Select from '../groupElements/Select/Select';


const MasterDataGroup = (props) => {

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
      ];   
    
    return (
        <>
             <Form.Row>
                <Form.Group as={Col} controlId="beginDate">                    
                    <DatePicker
                        name='beginDate'
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
                        options={dropdownOptions}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="executor">                    
                    <Select                        
                        name='executor'
                        label='Ответственный исполнитель:'
                        options={dropdownOptions}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="endDate">                
                    <DatePicker
                        name='endDate'
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

export default MasterDataGroup;