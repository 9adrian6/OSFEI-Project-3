import { STORAGE_KEY } from "../constants/storage.key";

export const getItem = (key) => {
  const item = localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return STORAGE_KEY === "tasks" ? [] : null;
};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));

  return getItem(key);
};
