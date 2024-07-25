import * as React from "react";
import Pagination from "@mui/material/Pagination";

export const CustomIcons = ({ pages }) => {
  return <Pagination count={pages} size="large" variant="outlined" />;
};
