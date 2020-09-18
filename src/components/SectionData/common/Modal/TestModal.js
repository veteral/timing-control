import React, {Component} from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

const TestModal = (props) => {
    
  
    
      return (
        <Modal show={props.handleModal}>
          <h2 >Hello</h2>
          <div>I am a modal</div>
          <form >
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
          <button >Confirm</button>
          <button >Cancel</button>
        </Modal>
      );
   
  }

  export default TestModal;