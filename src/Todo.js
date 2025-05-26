import listener from "./listener";
import observer from "./observer";

class Todo {
  init() {
    console.log("Todo app start");
    observer();
    listener();
  }
}

export default Todo;
