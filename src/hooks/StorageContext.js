import { createContext, useState } from "react";
import { STORAGE_KEY } from "../constants/storage.key";
import { getItem, setItem } from "../utils/localStorageService";

export const StorageContext = createContext({
  tasks: [],
  editedTask: null,
  isEditing: false,
  hideForm: true,
  addTask: (task) => {},
  deleteTask: (id) => {},
  deleteDoneTasks: () => {},
  toggleTask: (id) => {},
  updateTask: (task) => {},
  closeEditMode: () => {},
  enterEditMode: () => {},
  removeAllTasks: () => {},
  filterDoneTask: () => {},
  filterTodoTask: () => {},
  filterAllTask: () => {},
});

export const StorageProvider = (props) => {
  const [tasks, setTasks] = useState(getItem(STORAGE_KEY));
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [hideForm, setHideForm] = useState(true);

  const originalTasks = getItem(STORAGE_KEY);

  const addTask = (task) => {
    setTasks((prevState) => {
      setItem(STORAGE_KEY, [...prevState, task]);
      return [...prevState, task];
    });
  };

  const filterAllTask = () => {
    setTasks(() => {
      const filteredAllTask = originalTasks;

      return filteredAllTask;
    });
  };

  const filterDoneTask = () => {
    setTasks(() => {
      const filteredDoneTasks = originalTasks.filter((t) => t.checked === true);

      return filteredDoneTasks;
    });
  };

  const filterTodoTask = () => {
    setTasks(() => {
      const filteredTodoTasks = originalTasks.filter(
        (t) => t.checked === false
      );

      return filteredTodoTasks;
    });
  };

  const deleteTask = (id) => {
    setTasks((prevState) => {
      const filteredTasks = prevState.filter((t) => t.id !== id);
      setItem(STORAGE_KEY, filteredTasks);

      return filteredTasks;
    });
  };

  const deleteDoneTasks = () => {
    setTasks((prevState) => {
      const deleteDone = prevState.filter((t) => t.checked !== true);
      setItem(STORAGE_KEY, deleteDone);

      return deleteDone;
    });
  };

  const removeAllTasks = () => {
    setTasks(() => {
      const deleteAll = [];
      setItem(STORAGE_KEY, deleteAll);

      return deleteAll;
    });
  };

  const toggleTask = (id) => {
    setTasks((prevState) => {
      const modifiedTasks = prevState.map((t) =>
        t.id === id ? { ...t, checked: !t.checked } : t
      );
      setItem(STORAGE_KEY, modifiedTasks);
      return modifiedTasks;
    });
  };

  const updateTask = (task) => {
    setTasks((prevState) => {
      const taskUpdated = prevState.map((t) =>
        t.id === task.id ? { ...t, name: task.name } : t
      );
      setItem(STORAGE_KEY, taskUpdated);
      return taskUpdated;
    });
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    setHideForm(true);
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setHideForm(false);
  };

  return (
    <StorageContext.Provider
      value={{
        tasks: tasks,
        editedTask: editedTask,
        isEditing: isEditing,
        hideForm: hideForm,
        addTask: addTask,
        deleteTask: deleteTask,
        deleteDoneTasks: deleteDoneTasks,
        toggleTask: toggleTask,
        updateTask: updateTask,
        closeEditMode: closeEditMode,
        enterEditMode: enterEditMode,
        removeAllTasks: removeAllTasks,
        filterDoneTask: filterDoneTask,
        filterTodoTask: filterTodoTask,
        filterAllTask: filterAllTask,
      }}
    >
      {props.children}
    </StorageContext.Provider>
  );
};
