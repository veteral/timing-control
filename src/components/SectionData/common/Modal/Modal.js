import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import s from './Modal.module.css';
import FormControl from './FormControl/FormControl';

const ModalForm = (props) => {

  //const [show, setShow] = useState(true);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (    
    <>
      <Modal
        size="lg"
        show={true}
        // show={props.showModal}
        onHide={props.showModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className={s.modalHeader} closeButton>
          <Modal.Title>Добавить элемент</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FormControl />
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.showModal}>
            Закрыть
          </Button>
          <Button variant="primary">
            Сохранить
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default ModalForm;