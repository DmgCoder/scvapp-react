import { TextField, styled } from "@mui/material";
const options = {
  shouldForwardProp: (prop) => prop !== "fontColor",
};
const StyledTextField = styled(
  TextField,
  options
)(({ theme, fontColor }) => ({
  "& .MuiInputBase-root": {
    color: fontColor,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: fontColor,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: fontColor,
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: fontColor,
  },
  "& .MuiFormLabel-root": {
    color: fontColor,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: fontColor,
    },
    "&:hover fieldset": {
      borderColor: fontColor,
    },
  },
}));

export default StyledTextField;
