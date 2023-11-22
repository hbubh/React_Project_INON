import { ListItem } from "@mui/material";
import { memo } from "react";

const MemoCarsArry = ({ children }) => {
  console.log("render MemoCarsArry");
  return <ListItem>{children}</ListItem>;
};
export default memo(MemoCarsArry);
