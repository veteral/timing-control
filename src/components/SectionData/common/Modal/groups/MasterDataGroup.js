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
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="numberDoc">                    
                    <Input name={'numberDoc'} title={'Номер документа'} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="type">
                    <Form.Label>Тип документа</Form.Label>
                    <Select
                        control='select'
                        name='type'
                        options={dropdownOptions}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="executor">
                    <Form.Label>Ответственный исполнитель</Form.Label>
                    <Select
                        control='select'
                        name='executor'
                        options={dropdownOptions}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="endDate">                
                    <DatePicker
                        name='endDate'
                    />                
            </Form.Group> 


            <Form.Group controlId="title">                
                <Input name={'title'} title={'Documents'} />
            </Form.Group>

            <Form.Group controlId="text">
                <Form.Label>Дополнительная информация</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="3"
                    type="text"
                    name="text"
                    //onChange={handleChange}
                    // onBlur={handleBlur}
                    //value={values.text}
                />
            </Form.Group>

            {/* <FormGroup /> */}
        </>
    );
}

export default MasterDataGroup;