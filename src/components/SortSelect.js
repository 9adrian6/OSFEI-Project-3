import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { StorageContext } from "../hooks/StorageContext";

export default function BasicSelect() {
  const storage = useContext(StorageContext);
  const [task, setTask] = React.useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          displayEmpty
          value={task}
          sx={{ backgroundColor: "rgb(21, 101, 192)", color: "#fff" }}
          onChange={handleChange}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="All" onClick={storage.filterAllTask}>
            All
          </MenuItem>
          <MenuItem value="Done" onClick={storage.filterDoneTask}>
            Done
          </MenuItem>
          <MenuItem value="Todo" onClick={storage.filterTodoTask}>
            Todo
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
