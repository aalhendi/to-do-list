import taskStore from "../../stores/taskStore";
import Button from "react-bootstrap/Button";

const DeleteButton = (props) => {
  const handleDelete = () => {
    taskStore.deleteTask(props.task.id);
  };

  return (
    <div className="DeleteButton">
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
