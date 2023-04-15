import { Input, Button } from "@mui/material";
import { Form, BoxButtons } from "./EditForm.styled";
import { useState, useContext } from "react";
import { StorageContext } from "../../hooks/StorageContext";

const EditForm = (props) => {
  const storage = useContext(StorageContext);
  const [updatedTaskName, setUpdatedTaskName] = useState(
    storage.editedTask.name
  );
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!updatedTaskName.trim()) return;
    storage.updateTask({ ...storage.editedTask, name: updatedTaskName });
  };

  const cancelEdit = () => {
    storage.closeEditMode();
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        placeholder={storage.editedTask.name}
        value={updatedTaskName}
        onInput={(e) => setUpdatedTaskName(e.target.value)}
      />

      <BoxButtons>
        <Button
          variant="contained"
          style={{ padding: "5px 100px", margin: "0 20px 0 250px" }}
          onClick={cancelEdit}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          style={{ padding: "5px 100px" }}
        >
          Done
        </Button>
      </BoxButtons>
    </Form>
  );
};

export default EditForm;
