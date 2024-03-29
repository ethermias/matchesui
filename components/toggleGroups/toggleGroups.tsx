"use client";
import React from "react";
import ToggleGroupItem from "./toggleGroupItem";
import { ToggleGroupsProps } from "./types";

const ToggleGroups: React.FC<ToggleGroupsProps> = ({
  value,
  values,
  onChange,
}) => {
  function handleChange(e: string) {
    onChange(e)
  }
  return (
    <div>
      {values && values.map((v) => (
        <ToggleGroupItem
          key={v}
          value={v}
          selected={v === value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default ToggleGroups;
