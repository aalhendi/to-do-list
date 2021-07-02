import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";

const TaskItem = (props) => {
  const task = props.task;

  return (
    <div>
      <h1>{task.name}</h1>
      <UpdateButton task={task} />
      <DeleteButton task={task} />
    </div>
  );
};

export default TaskItem;
