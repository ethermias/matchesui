'use client'
import React, { useState } from 'react';

type ToggleGroupProps = {
  type: 'single';
  children: React.ReactNode;
};

type ToggleGroupItemProps = {
  value: string;
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const ToggleGroup: React.FC<ToggleGroupProps> = ({ type, children }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleItemClick = (value: string) => {
    if (type === 'single') {
      setSelectedValue(value);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<ToggleGroupItemProps>, {
          selected: (child as React.ReactElement<ToggleGroupItemProps>).props.value === selectedValue,
          onClick: () => handleItemClick((child as React.ReactElement<ToggleGroupItemProps>).props.value),
        })
      )}
    </div>
  );
};

const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({ value, selected, onClick, children }) => {
  return (
    <button onClick={onClick} style={{ fontWeight: selected ? 'bold' : 'normal' }}>
      {children}
    </button>
  );
};

const ToggleGroups: React.FC = () => {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="BUR">BUR&nbsp;</ToggleGroupItem>
      <ToggleGroupItem value="ARS">ARS&nbsp;</ToggleGroupItem>
      <ToggleGroupItem value="FUL">FUL&nbsp;</ToggleGroupItem>
      <ToggleGroupItem value="MAN">MAN&nbsp;</ToggleGroupItem>

    </ToggleGroup>
  );
};

export default ToggleGroups;
