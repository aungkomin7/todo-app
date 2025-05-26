import { checkList, createNewList, deleteList, editList } from "./lists";
import { listGroup, taskInput } from "./selectors";

export const addTask = (taskname) => {
  listGroup.append(createNewList(taskname));
  taskInput.value = null;
};

export const addTaskHandler = () => {
  addTask(taskInput.value);
};

export const listGroupHandler = (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteList(event.target.closest(".list").id);
  } else if (event.target.classList.contains("edit-btn")) {
    editList(event.target.closest(".list").id);
  } else if (event.target.classList.contains("check-box")) {
    checkList(event.target.closest(".list").id);
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    addTask(taskInput.value);
  }
};
