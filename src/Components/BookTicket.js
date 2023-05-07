import React,{useState, useRef} from 'react'
import { Modal, Button } from 'react-bootstrap'

const BookTicket = ({id}) => {
    const datainput = useRef();
    const dataemail = useRef();
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
   // console.log(data.current.value)
    localStorage.setItem("inputvalue", datainput.current.value)
    localStorage.setItem("email", dataemail.current.value)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book Ticket
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <strong>Name:</strong><input ref={datainput}/><br></br><br></br>
            <strong>Email:</strong><input ref={dataemail}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Store Details
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookTicket