import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import s from './Modal.module.css';
import FormControl from './FormControl/FormControl';
import { Formik } from 'formik';
import DatePicker from '../DatePicker/DatePiker';

const ModalForm = (props) => {
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
          handleBlur,
          handleSubmit,
        }) => (
            <Modal
              size="lg"
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
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridDateStart">
                      <Form.Label>Документ от:&nbsp;</Form.Label>
                      <DatePicker
                        name='beginDate'
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNumDoc">
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
                    <Form.Group as={Col} controlId="formGridTypeDoc">
                      <Form.Label>Тип документа</Form.Label>
                      <Form.Control 
                        as="select" 
                        defaultValue={values.type}
                        name="type"
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        value={values.type}
                      >
                        <option>Заявка1</option>
                        <option>Письмо</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridExecuted">
                      <Form.Label>Ответственный исполнитель</Form.Label>
                      <Form.Control 
                        as="select" 
                        //defaultValue="Заповитряный"
                        defaultValue={values.executor}
                        name="executor"
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        value={values.executor}
                      >
                        <option>Заповитряный</option>
                        <option>Кирикович</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                      Контрольный срок:
                    </Form.Label>
                    <Col sm="9">
                      <DatePicker
                          name='endDate'
                        />
                    </Col>
                  </Form.Group>

                  <Form.Group controlId="formGridHeader">
                    <Form.Label>Заголовок документа</Form.Label>
                    <Form.Control 
                      type="text"
                      name="title"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      value={values.title}
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridAddText">
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