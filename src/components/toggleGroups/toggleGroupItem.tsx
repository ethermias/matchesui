"use client";
import React, { useState } from "react";
import { ToggleGroupsItemProps } from "./types";

const ToggleGroupItem: React.FC<ToggleGroupsItemProps> = ({
  value, 
  selected,
  onChange
}) => {
  function handleClick(){
    onChange(value)
  }
  return (
    <button
      onClick={handleClick}
      style={{ fontWeight: selected ? "bold" : "normal" }}
    >
      {value}&nbsp;
    </button>
  );
};

export default ToggleGroupItem;
