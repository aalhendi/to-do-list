import { useState } from "react";
import { observer } from "mobx-react";
import taskStore from "../stores/taskStore";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskList = taskStore.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));

  const [task, setTask] = useState({
    name: "",
    description: "",
    status: false,
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log(task);
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
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default observer(TaskList);
