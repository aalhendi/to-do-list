import DeleteButton from "./Buttons/DeleteButton";
import PriorityButton from "./Buttons/PriorityButton";
import UpdateButton from "./Buttons/UpdateButton";
import { observer } from "mobx-react";

const TaskItem = (props) => {
  const task = props.task;

  return (
    <div>
      <h1>{task.name + " " + task.priority}</h1>
      <UpdateButton task={task} />
      <DeleteButton task={task} />
      {task.status ? null : <PriorityButton task={task} />}
    </div>
  );
};

export default observer(TaskItem);
