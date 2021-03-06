import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalMessage({ dialog, data, hideDialog, deleteElement, toExecuteDocument, property }) {
    
    const clickHandler = () => {
      console.log('check', dialog.check);
      if(dialog.check)
        toExecuteDocument(data, dialog.row);
      else
        deleteElement(data, dialog.row.id, property);
      
      hideDialog();
    }

    return (
      <>
        <Modal show={dialog.show} onHide={hideDialog}>
          <Modal.Header closeButton>
            <Modal.Title>{dialog.title}</Modal.Title>
          </Modal.Header>
            <Modal.Body>{dialog.text}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideDialog}>
              Нет
            </Button>
            <Button variant="primary" onClick={clickHandler}>
              Да
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }