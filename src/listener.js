import { addTaskHandler, listGroupHandler, taskInputHandler } from "./handlers";
import { addTaskBtn, listGroup, taskInput } from "./selectors";

const listener = () => {
  addTaskBtn.addEventListener("click", addTaskHandler);
  listGroup.addEventListener("click", listGroupHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
};

export default listener;
