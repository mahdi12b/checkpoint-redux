import React, { useState } from "react";
import { useDispatch } from "react-redux";

// actions
import { editTask } from "../../Redux/Action" ;

// CSS
import { Modal, Button } from "react-bootstrap";

const Edit = ({ todo }) => {
  const [show, setShow] = useState(false);
  const [newText, setnewText] = useState(todo.name);
  const dispatch = useDispatch();


// fuctions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => {
    // dispatch the action edit and close the modal
    dispatch(editTask({id:todo.id, name:newText}));
    setnewText('')
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={newText} onChange={(e) => setnewText(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Edit