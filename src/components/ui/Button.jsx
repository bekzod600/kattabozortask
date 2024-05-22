/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  &.MuiButton-contained {
    background-color: #6200ea;
    color: white;
    &:hover {
      background-color: #3700b3;
    }
  }

  &.MuiButton-outlined {
    border-color: #6200ea;
    color: #6200ea;
    &:hover {
      border-color: #3700b3;
      color: #3700b3;
    }
  }

  &.MuiButton-text {
    color: #6200ea;
    &:hover {
      background-color: rgba(98, 0, 234, 0.1);
    }
  }
`;

const CustomButton = ({ variant = "primary", children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
