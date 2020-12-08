import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalMessage({ dialog, data, hideDialog, deleteDocument }) {
    
    const clickHandler = () => {
      deleteDocument(data, dialog.id);
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
              Да, удалить
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }