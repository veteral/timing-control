import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';


const ModalForm = ( { children, 
                      showModal, 
                      show, 
                      setData,
                      property, 
                      dataForm, 
                      titleForm,
                      data } ) => {
  //console.log('Values', dataForm);                          
  return (
    <>
      <Formik        
        initialValues={dataForm}       
        
        onSubmit={(values) => {          
          console.log("SubmitValues", values);
          showModal();
          setData(data, values, property);
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
                    <Modal.Title>{titleForm}</Modal.Title>
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