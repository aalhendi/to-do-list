import { observer } from "mobx-react";
import taskStore from "../stores/taskStore";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskList = taskStore.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));
  return <div>{taskList}</div>;
};

export default observer(TaskList);
