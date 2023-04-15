import { useState } from "react";

import { getItem, setItem } from "../utils/localStorageService";

/**
 * Setting key and value for using localStorage
 *
 * @param {string} key
 * @param {Array} value
 * @returns
 */
const useTasksStorage = (key, initArray) => {
  const tasks = getItem(key);
  const newTasks = !tasks?.length
    ? setItem(key, initArray)
    : setItem(key, [...tasks, ...initArray]);
  const [value, setValue] = useState(() => {
    return newTasks;
  });

  return [newTasks, setValue];
};

export default useTasksStorage;
