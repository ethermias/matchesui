"use client";
import React, { useState } from "react";
import { ToggleGroupsItemProps } from "./types";
import { Button } from "../ui/button";

const ToggleGroupItem: React.FC<ToggleGroupsItemProps> = ({
  value, 
  selected,
  onChange
}) => {
  function handleClick(){
    onChange(value)
  }
  return (
    <Button variant="secondary" size="sm"
      onClick={handleClick}
      style={{ fontWeight: selected ? "bold" : "normal" }}
    > 
      {value}&nbsp;
     
    </Button>
  );
};

export default ToggleGroupItem;
