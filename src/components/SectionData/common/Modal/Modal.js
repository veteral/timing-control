import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import s from './Modal.module.css';
import { Formik } from 'formik';

// import Select from './groupElements/Select/Select';
// import DatePicker from './FormGroup/controls/DatePicker/DatePiker';

//import MasterDataGroup from './groups/MasterDataGroup';
import AdditionalDataGroup from './groups/AdditionalDataGroup';


const ModalForm = (props) => {

  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ];

  return (
    <>
      <Formik
        initialValues={{
          beginDate: null,
          numberDoc: '',
          endDate: null,
          type: 'Письмо111',
          executor: '',
          title: '',
          text: ''
        }}
        onSubmit={(values) => {
          console.log('Submit', values);
        }}        
      >

        {({
          values, 
          handleChange,          
          handleSubmit
        }) => (
            <Modal
              size="sm"
              show={true}
              // show={props.showModal}
              onHide={props.showModal}
              backdrop="static"
              keyboard={false}
            >
              <Form onSubmit={handleSubmit}>

                <Modal.Header className={s.modalHeader} closeButton>
                  <Modal.Title>Добавить элемент</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  {/* <MasterDataGroup /> */}
                  <AdditionalDataGroup />
                  {/* <Form.Row>
                    <Form.Group as={Col} controlId="beginDate">
                      <Form.Label>Документ от:</Form.Label>
                      <DatePicker
                        name='beginDate'
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="numberDoc">
                      <Form.Label>Номер документа</Form.Label>
                      <Form.Control
                        type="text"
                        name="numberDoc"
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        value={values.numberDoc}
                      />
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

                  <Form.Group as={Row} controlId="endDate">
                    <Form.Label column sm="3">
                      Контрольный срок:
                    </Form.Label>
                    <Col sm="9">
                      <DatePicker
                          name='endDate'
                        />
                    </Col>
                  </Form.Group>


                  <Form.Group controlId="title">
                    <Form.Label>Заголовок документа</Form.Label>
                    <Form.Control 
                      type="text"
                      name="title"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={values.title}
                    />
                  </Form.Group>

                  <Form.Group controlId="text">
                    <Form.Label>Дополнительная информация</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows="3" 
                      type="text"
                      name="text"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={values.text}
                    />
                  </Form.Group>

                  <FormGroup />   */}

                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={props.showModal}>
                    Закрыть
                  </Button>
                  <Button type='submit' variant="primary">
                    Сохранить
                  </Button>
                </Modal.Footer>

              </Form>
            </Modal>

          )}

      </Formik>
    </>
  );
}


export default ModalForm;