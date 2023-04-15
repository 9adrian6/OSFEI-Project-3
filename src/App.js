import { useContext, React } from "react";
import { Typography, Container, Button } from "@mui/material";
import styled from "styled-components";
import CustomForm from "./components/CustomForm";
import EditForm from "./components/EditForm/EditForm";
import TaskList from "./components/TaskList";
import { StorageContext, StorageProvider } from "./hooks/StorageContext";
import BasicSelect from "./components/SortSelect";

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export default function App() {
  const storage = useContext(StorageContext);

  return (
    <Wrapper>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        TodoInput
      </Typography>

      {storage.isEditing && (
        <EditForm
          editedTask={storage.editedTask}
          updateTask={storage.updateTask}
        />
      )}

      {storage.hideForm && <CustomForm addTask={storage.addTask} />}
      <BasicSelect />

      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        TodoList
      </Typography>
      <Container style={{ paddingLeft: "950px" }}></Container>
      {storage.tasks && (
        <TaskList
          tasks={storage.tasks}
          deleteTask={storage.deleteTask}
          toggleTask={storage.toggleTask}
          enterEditMode={storage.enterEditMode}
        />
      )}
      <Container maxWidth="md">
        <Button
          variant="contained"
          color="error"
          style={{ padding: "5px 100px", margin: "0 20px 0 90px" }}
          onClick={() => storage.deleteDoneTasks()}
        >
          Delete done tasks
        </Button>
        <Button
          variant="contained"
          color="error"
          style={{ padding: "5px 100px" }}
          onClick={storage.removeAllTasks}
        >
          Delete all tasks
        </Button>
      </Container>
    </Wrapper>
  );
}
