export type ToggleGroupsProps = {
  value: string
  onChange: Function
  values?: Array<string>
};

export type ToggleGroupsItemProps = {
  value: string
  selected: boolean;
  onChange: Function
  values?: Array<string>
};
