import taskStore from "../../stores/taskStore";
import Button from "react-bootstrap/Button";

const UpdateButton = (props) => {
  const toggleStatus = () => {
    taskStore.updateTask({ ...props.task, status: !props.task.status });
  };

  return (
    <div className="UpdateBtn">
      <Button variant="primary" onClick={toggleStatus}>
        {props.task.status ? "Undo" : "Done"}
      </Button>
    </div>
  );
};

export default UpdateButton;
