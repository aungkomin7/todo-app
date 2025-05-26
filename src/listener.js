import { addTaskHandler, checkAllBtnHandler, deleteAllBtnHandler, listGroupHandler, taskInputHandler } from "./handlers";
import { addTaskBtn, checkAllBtn, deleteAllBtn, listGroup, taskInput } from "./selectors";

const listener = () => {
  addTaskBtn.addEventListener("click", addTaskHandler);
  listGroup.addEventListener("click", listGroupHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
  deleteAllBtn.addEventListener("click",deleteAllBtnHandler)
  checkAllBtn.addEventListener("click",checkAllBtnHandler)
};

export default listener;
