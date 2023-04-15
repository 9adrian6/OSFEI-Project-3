import { IconButton, Checkbox, Box } from "@mui/material";
import { useContext } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { StorageContext } from "../../hooks/StorageContext";
import {
  FirstContainer,
  SecondContainer,
  StyledInput,
} from "./TaskItem.styled";

const TaskItem = (props) => {
  const { task } = props;

  const storage = useContext(StorageContext);
  //   const [isChecked, setIsChecked] = useState(task.checked);
  const handleCheckboxChange = (e) => {
    // setIsChecked(!isChecked);
    storage.toggleTask(task.id);
  };
  return (
    <FirstContainer>
      <SecondContainer>
        <StyledInput task={task}>{task.name}</StyledInput>
        <Box>
          <Checkbox
            type="checkbox"
            checked={task.checked}
            onChange={handleCheckboxChange}
            name={task.name}
            id={`${task.id}`}
          />

          <IconButton
            variant="contained"
            color="success"
            onClick={() => storage.enterEditMode(task)}
          >
            <CreateIcon />
          </IconButton>
          <IconButton
            variant="contained"
            color="error"
            onClick={() => storage.deleteTask(task.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </SecondContainer>
    </FirstContainer>
  );
};

export default TaskItem;
