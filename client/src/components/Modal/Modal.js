import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';

import Input from './elements/Input'

import BigForm from './forms/BigForm';
import SmallForm from './forms/SmallForm';
import { BIG } from '../../context/type';


const ModalForm = ( { children, showModal, show, setData, dataForm } ) => {

  console.log('dataForms.Values', dataForm);
  const {numberDoc, dateDoc, employee, executionDate, title, text, typeDoc} = dataForm;
 
  const initialValues = {
      numberDoc,
      dateDoc: new Date(dateDoc),
      employee,
      executionDate: new Date(executionDate),
      title,
      text,
      typeDoc
  };

  console.log('InitialValues', initialValues);    
    
  return (
    <>
      <Formik        
        initialValues={initialValues}       
        
        onSubmit={(values) => {          
          console.log("SubmitValues", values);
          showModal();
          //setData(values);
        }}        
      >
        {({
          values, 
          handleChange,          
          handleSubmit,          
        }) => {            
            return (
            <Modal
              size="lg"              
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
                  {children}                
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
)
          }
          }

      </Formik>
    </>
  );
}

export default ModalForm;