const TaskItem = (props) => {
  const task = props.task;

  return (
    <div>
      <h1>{task.name}</h1>
    </div>
  );
};

export default TaskItem;
