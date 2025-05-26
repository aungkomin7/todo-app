import { updateDoneListTotal, updateListTotal } from "./lists";
import { listGroup } from "./selectors";

const observer = () => {
  const taskStatus = () => {
    updateListTotal();
    updateDoneListTotal();
  };

  const observerOptions = {
    attributes: true,
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(taskStatus);
  observer.observe(listGroup, observerOptions);
};

export default observer;
