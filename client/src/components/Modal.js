import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { Formik } from 'formik';

// import Select from './groupElements/Select/Select';
// import DatePicker from './FormGroup/controls/DatePicker/DatePiker';

//import MasterDataGroup from './groups/MasterDataGroup';
//import AdditionalDataGroup from './groups/AdditionalDataGroup';


const ModalForm = ( {showModal, show, setData } ) => {

  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ];

  console.log('Modal - render');

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
          setData(values);
        }}        
      >

        {({
          values, 
          handleChange,          
          handleSubmit
        }) => (
            <Modal
              size="lg"
              //show={true}
              show={show}
              onHide={showModal}
              backdrop="static"
              keyboard={false}
            >
              <Form onSubmit={handleSubmit}>

                <Modal.Header className={'modal-header'} closeButton>
                  <Modal.Title>Добавить элемент</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  {/* <MasterDataGroup /> */}
                  {/* <AdditionalDataGroup /> */}
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={showModal}>
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