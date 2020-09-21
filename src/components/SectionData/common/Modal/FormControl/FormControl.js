import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import DatePicker from '../../DatePicker/DatePiker';

const FormControl = (props) => {
    return (
        <>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDateStart">
                        <Form.Label>Документ от:&nbsp;</Form.Label>
                        <DatePicker
                            startDate={props.startDate}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNumDoc">
                        <Form.Label>Номер документа</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTypeDoc">
                        <Form.Label>Тип документа</Form.Label>
                        <Form.Control as="select" defaultValue="Заявка">
                            <option>Заявка</option>
                            <option>Письмо</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridExecuted">
                        <Form.Label>Ответственный исполнитель</Form.Label>
                        <Form.Control as="select" defaultValue="Заповитряный">
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
                            startDate={props.startDate}
                            setStartDate={props.setStartDate}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formGridHeader">
                    <Form.Label>Заголовок документа</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridAddText">
                    <Form.Label>Дополнительная информация</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

            </Form>
        </>
    );
}

export default FormControl;