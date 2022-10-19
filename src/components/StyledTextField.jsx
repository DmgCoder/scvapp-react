import { TextField, styled } from "@mui/material";
const options = {
  shouldForwardProp: (prop) => prop !== "fontcolor",
  shouldForwardProp: (prop) => prop !== "activecolor",
};
const StyledTextField = styled(
  TextField,
  options
)(({ activecolor, fontcolor }) => ({
  "& .MuiInputBase-root": {
    color: fontcolor,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: fontcolor,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: activecolor,
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: fontcolor,
  },
  "& .MuiFormLabel-root": {
    color: fontcolor,
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: activecolor,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: fontcolor,
    },
    "&:hover fieldset": {
      borderColor: fontcolor,
    },
    "&.Mui-focused fieldset": {
      borderColor: activecolor,
    },
  },
}));

export default StyledTextField;
