import DeleteButton from "./Buttons/DeleteButton";
import PriorityButton from "./Buttons/PriorityButton";
import UpdateButton from "./Buttons/UpdateButton";
import { observer } from "mobx-react";
import ListGroup from "react-bootstrap/ListGroup";
import "../App.css";

const TaskItem = (props) => {
  const task = props.task;

  return (
    <ListGroup.Item as="li" className="TaskItem">
      <h4>{task.name + " " + task.priority}</h4>
      <UpdateButton task={task} />
      <DeleteButton task={task} />
      {task.status ? null : <PriorityButton task={task} />}
    </ListGroup.Item>
  );
};

export default observer(TaskItem);
