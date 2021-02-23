import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalAddUser = ({ addContactData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [idValue, setIdValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const handlerOnChangeForm = (e) => {
    const value = e.target.value;
    const valueId = e.target.id;
    switch (valueId) {
      case 'formBasicId':
        return setIdValue(value);
      case 'formBasicFirstName':
        return setFirstNameValue(value);
      case 'formBasicLastName':
        return setLastNameValue(value);
      case 'formBasicEmail':
        return setEmailValue(value);
      case 'formBasicPhone':
        return setPhoneValue(value);
      default:
        break;
    }
  };

  const submitNewUser = (e) => {
    e.preventDefault();
    addContactData({
      id: idValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      phone: phoneValue,
      address: {
        streetAddress: 'не указан',
        city: 'не указан',
        state: 'не указана',
        zip: 'не указан',
      },
      description: 'et lacus magna dolor...',
    });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Добавить
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onChange={handlerOnChangeForm} onSubmit={submitNewUser}>
            <Form.Group controlId="formBasicId">
              <Form.Label>Id</Form.Label>
              <Form.Control type="number" placeholder="Enter id here" />
            </Form.Group>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>FirstName</Form.Label>
              <Form.Control type="text" placeholder="Enter FirstName here" />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>LastName</Form.Label>
              <Form.Control type="text" placeholder="Enter LastName here" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email here" />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone here" />
            </Form.Group>
            {idValue &&
              firstNameValue &&
              lastNameValue &&
              emailValue &&
              phoneValue && (
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAddUser;
