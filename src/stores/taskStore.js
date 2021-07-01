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
}

const taskStore = new TaskStore();
taskStore.fetchTasks();
export default taskStore;
