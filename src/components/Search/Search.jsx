import React from "react";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const query = useLocation();
  console.log(query);
  return <input type="text" />;
};
