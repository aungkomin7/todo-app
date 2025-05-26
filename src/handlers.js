import Swal from "sweetalert2";
import { checkList, createNewList, deleteList, editList } from "./lists";
import { listGroup, taskInput } from "./selectors";

export const addTask = (taskname) => {
  listGroup.append(createNewList(taskname));
  taskInput.value = null;
};

export const addTaskHandler = () => {
  if (taskInput.value.trim()) {
    addTask(taskInput.value);
  } else {
    Swal.fire({
      text: "Fill add new task name!",
      icon: "question",
    });
  }
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
  if (taskInput.value.trim()) {
    if (event.key === "Enter") {
      addTask(taskInput.value);
    }
  } else {
    Swal.fire({
      text: "Fill add new task name!",
      icon: "question",
    });
  }
};

export const checkAllBtnHandler = () => {

    const lists = document.querySelectorAll(".list");
    lists.forEach((el) => {
        el.querySelector(".check-box").checked = true;
        checkList(el.id)
    })
};

export const deleteAllBtnHandler = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const lists = document.querySelectorAll(".list");
      lists.forEach((el) => {
        el.remove();
      });
    }
  });
};
