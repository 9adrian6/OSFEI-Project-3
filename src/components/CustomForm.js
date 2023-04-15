import { Input, Button } from "@mui/material";
import styled from "styled-components";
import { useState, useContext } from "react";
import { StorageContext } from "../hooks/StorageContext";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  border: 2px solid lightgrey;
  padding: 15px;
  border-radius: 5px;
`;

const CustomForm = (props) => {
  const { addTask } = useContext(StorageContext);
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        placeholder="New Todo"
        value={task}
        onInput={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Add new task
      </Button>
    </Form>
  );
};

export default CustomForm;
