import { useState } from "react";
import { observer } from "mobx-react";
import taskStore from "../stores/taskStore";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskList = taskStore.tasks
    .filter((task) => task.status === false)
    .map((task) => <TaskItem task={task} key={task.id} />);

  const doneTaskList = taskStore.tasks
    .filter((task) => task.status === true)
    .map((task) => <TaskItem task={task} key={task.id} />);

  const [task, setTask] = useState({
    name: "",
    description: "",
    status: false,
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    taskStore.addTask(task);
  };

  return (
    <div>
      {taskList}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Task</button>
      </form>
      {doneTaskList}
    </div>
  );
};

export default observer(TaskList);
