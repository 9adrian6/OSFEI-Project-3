import styled from "styled-components";
import { Box } from "@mui/material";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  border: 2px solid lightgrey;
  padding: 15px;
  border-radius: 5px;
`;

export const BoxButtons = styled(Box)`
  display: flex;
`;
