import Container from "@mui/material/Container";
import { InputLabel } from "@mui/material";
import styled from "styled-components";

export const FirstContainer = styled(Container)`
  width: 1038px;
  border: 2px solid lightgrey;
  padding: 5px;
  margin: 0 auto 10px;
  border-radius: 3px;
`;

export const SecondContainer = styled(Container)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;

export const InputNameStyle = `
text-decoration: line-through;
color: red;
`;

export const StyledInput = styled(InputLabel)`
  ${(props) => (props.task.checked ? InputNameStyle : "")}
`;
