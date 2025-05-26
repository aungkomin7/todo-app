import Swal from "sweetalert2";
import { doneListTotal, listTemplate, listTotal } from "./selectors";
import { v4 as uuidv4 } from "uuid";

export const updateListTotal = () => {
  const lists = document.querySelectorAll(".list");
  listTotal.innerText = lists.length;
};

export const updateDoneListTotal = () => {
  const lists = document.querySelectorAll("input:checked");
  doneListTotal.innerText = lists.length;
};

export const createNewList = (currenttask) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" + uuidv4();
  list.querySelector(".current-task").innerText = currenttask;
  return list;
};

export const deleteList = (listId) => {
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
      const currentList = document.querySelector(`#${listId}`);
      currentList.classList.add("animate__animated", "animate__hinge");
      currentList.addEventListener("animationend", () => {
        currentList.remove();
      });
    }
  });
};

export const checkList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const currentTask = currentList.querySelector(".current-task");
  const editBtn = currentList.querySelector(".edit-btn");
  const checkInput = currentList.querySelector(".check-box");

  currentTask.classList.toggle("line-through");
  currentTask.classList.toggle("opacity-50");
  currentList.classList.toggle("scale-95");
  currentList.classList.toggle("duration-200");

  if (checkInput.checked) {
    editBtn.classList.add("opacity-50");
    editBtn.setAttribute("disabled", true);
  } else {
    editBtn.classList.remove("opacity-50");
    editBtn.removeAttribute("disabled");
  }
};

export const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const currentTask = currentList.querySelector(".current-task");
  const editBtn = currentList.querySelector(".edit-btn");
  const deleteBtn = currentList.querySelector(".delete-btn");
  const checkInput = currentList.querySelector(".check-box");

  deleteBtn.classList.add("opacity-50");
  checkInput.classList.add("opacity-50");
  deleteBtn.setAttribute("disabled", true);
  editBtn.setAttribute("disabled", true);
  checkInput.setAttribute("disabled", true);
  currentTask.classList.add("hidden");

  const newTaskInput = document.createElement("input");
  currentTask.after(newTaskInput);
  newTaskInput.classList.add(
    "bg-gray-50",
    "border-b",

    "border-gray-300",
    "text-gray-900",
    "text-sm",
    "rounded-lg",
    "focus:border-blue-500",
    "block",
    "w-[200px]",
    "p-1.5",
    "dark:bg-gray-700",
    "dark:border-gray-600",
    "dark:placeholder-gray-400",
    "dark:text-white",
    "dark:focus:border-blue-500",
    "focus-visible:outline-none",
    "text-mono",
   
  );
  newTaskInput.value = currentTask.innerText;

  newTaskInput.focus();

  newTaskInput.addEventListener("blur", () => {
    newTaskInput.classList.add("hidden");
    currentTask.innerText = newTaskInput.value;
    currentTask.classList.remove("hidden");

    deleteBtn.removeAttribute("disabled");
    editBtn.removeAttribute("disabled");
    checkInput.removeAttribute("disabled");

    deleteBtn.classList.remove("opacity-50");
    checkInput.classList.remove("opacity-50");
  });
};
