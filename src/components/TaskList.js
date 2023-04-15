import TaskItem from "./TaskItem/TaskItem";
import { StorageContext } from "../hooks/StorageContext";
import { useContext } from "react";

const TaskList = (props) => {
  const storage = useContext(StorageContext);
  return (
    <div>
      <div>
        {storage.tasks
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={storage.deleteTask}
              toggleTask={storage.toggleTask}
              enterEditMode={storage.enterEditMode}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskList;
