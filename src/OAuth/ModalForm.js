// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// function ModalForm() {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     handleClose();
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Open Modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal Form</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter name" />
//             </Form.Group>

//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ModalForm;






















import React, { useState } from 'react';
import '../ModalForm.css';
import FacebookLog from './FacebookLogin';
import Login from './Login';

function ModalForm() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* <h1>Modal Form with Awesome CSS</h1> */}

      <button className='btn-success btn ' onClick={handleOpenModal}>Contact me now</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-form">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="submit" value="Sign Up" />
              
            </form>
            <Login/><FacebookLog/>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalForm;
