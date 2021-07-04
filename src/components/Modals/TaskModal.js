import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import taskStore from "../../stores/taskStore";
import { observer } from "mobx-react";
import "../../App.css";

const TaskModal = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const [task, setTask] = useState({
    name: "",
    description: "",
    status: false,
    priority: "low",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    taskStore.addTask(task);
    toggleShow();
  };

  return (
    <div className="Modal">
      <Button variant="primary" onClick={toggleShow}>
        Add New Task
      </Button>

      <Modal show={show} onHide={toggleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              placeholder="Name of your task"
              onChange={handleChange}
              name="name"
            />
            <input
              placeholder="Priority of your task"
              onChange={handleChange}
              name="priority"
              defaultValue="low"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleShow}>
              Close
            </Button>

            <Button type="submit" variant="primary">
              Add Task
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default observer(TaskModal);
