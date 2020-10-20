import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';

import BigForm from './forms/BigForm';
import SmallForm from './forms/SmallForm';
import { BIG } from '../../context/type';


const ModalForm = ( {showModal, show, setData, dataForm } ) => {

  console.log('dataForms.Values', dataForm.values);
  //let formValues = {};
  //debugger;
  // if(type === 'big') {
  //   formValues =  {
  //       numberDoc: '',
  //       dateDoc: null,
  //       employee: 0,
  //       executionDate: null,
  //       title: '',
  //       text: '',
  //       typeDoc: 0
  //   };    
  // } else if(type === 'small') {
  //   formValues = {
  //     name: ''
  //   };
  // } else {
  //     console.log('Не могу определить тип отображаемой формы');
  //     return null;
  //   }

  return (
    <>
      <Formik
        // initialValues={dataForm.values} 
        initialValues={dataForm.values
          // {numberDoc: '15',
          // dateDoc: null,
          // employee:  '',
          // executionDate: new Date('Sat Oct 13 2020 12:53:20 GMT+0300 (Eastern European Summer Time)'),
          // title: 'title',
          // text: 'text',
          // typeDoc: 0}
        }
        onSubmit={(values) => {          
          console.log(values);
          showModal();
          //setData(values);
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
                  
                  { 
                    dataForm.type === BIG 
                    ? <BigForm values={values} />
                    : <SmallForm />   
                  } 

                  {/* <SmallForm /> */}
                  
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