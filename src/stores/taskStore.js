import { makeAutoObservable } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      this.tasks = response.data;
    } catch (error) {
      console.error("fetchTasks:", error);
    }
  };

  addTask = async (newTask) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newTask);
      this.tasks.push(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  updateTask = async (updateTask) => {
    try {
      await axios.put(
        `http://localhost:8000/tasks/${updateTask.id}`,
        updateTask
      );
      const task = this.tasks.find((task) => task.id === updateTask.id);
      task.status = updateTask.status;
      task.priority = updateTask.priority;
    } catch (error) {
      console.error(error);
    }
  };

  deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    } catch (error) {
      console.error(error);
    }
  };
}

const taskStore = new TaskStore();
taskStore.fetchTasks();
export default taskStore;
