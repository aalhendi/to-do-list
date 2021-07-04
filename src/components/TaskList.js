import { observer } from "mobx-react";
import taskStore from "../stores/taskStore";
import TaskItem from "./TaskItem";
import ListGroup from "react-bootstrap/ListGroup";
import TaskModal from "./Modals/TaskModal";

const pNum = (task) => {
  if (task.priority === "low") {
    return 1;
  } else if (task.priority === "medium") {
    return 2;
  } else if (task.priority === "high") {
    return 3;
  } else {
    console.error("unknown priority", task.priority);
    return 4;
  }
};

const prioritySort = (a, b) => {
  if (pNum(a) < pNum(b)) {
    return -1;
  }
  if (pNum(a) > pNum(b)) {
    return 1;
  }
  return 0;
};

const TaskList = () => {
  const taskList = taskStore.tasks
    .filter((task) => task.status === false)
    .sort(prioritySort)
    .map((task) => <TaskItem task={task} key={task.id} />);

  const doneTaskList = taskStore.tasks
    .filter((task) => task.status === true)
    .map((task) => <TaskItem task={task} key={task.id} />);

  return (
    <div>
      <TaskModal />

      <div className="list">
        <ListGroup as="ul" className="TaskList">
          {taskList}
        </ListGroup>

        <ListGroup as="ul" className="DoneTaskList">
          {doneTaskList}
        </ListGroup>
      </div>
    </div>
  );
};

export default observer(TaskList);
