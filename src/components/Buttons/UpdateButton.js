import taskStore from "../../stores/taskStore";

const UpdateButton = (props) => {
  const toggleStatus = () => {
    taskStore.updateTask({ ...props.task, status: !props.task.status });
  };

  return (
    <div>
      <button onClick={toggleStatus}>
        {props.task.status ? "Undo" : "Done"}
      </button>
    </div>
  );
};

export default UpdateButton;
