const UpdateButton = (props) => {
  const [task, setTask] = useState({
    ...props.task,
  });

  const toggleStatus = () => {
    setTask({ ...props.task, status: !props.task.status });
  };

  return (
    <div>
      <button onClick={toggleStatus}>Done</button>
    </div>
  );
};

export default UpdateButton;
