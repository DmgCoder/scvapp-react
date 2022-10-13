import { TextField, styled } from "@mui/material";
const options = {
  shouldForwardProp: (prop) => prop !== "fontColor",
  shouldForwardProp: (prop) => prop !== "activeColor",
};
const StyledTextField = styled(
  TextField,
  options
)(({ activeColor, fontColor }) => ({
  "& .MuiInputBase-root": {
    color: fontColor,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: fontColor,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: activeColor,
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: fontColor,
  },
  "& .MuiFormLabel-root": {
    color: fontColor,
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: activeColor,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: fontColor,
    },
    "&:hover fieldset": {
      borderColor: fontColor,
    },
    "&.Mui-focused fieldset": {
      borderColor: activeColor,
    },
  },
}));

export default StyledTextField;
