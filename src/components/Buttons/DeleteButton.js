import taskStore from "../../stores/taskStore";

const DeleteButton = (props) => {
  const handleDelete = () => {
    taskStore.deleteTask(props.task.id);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteButton;
