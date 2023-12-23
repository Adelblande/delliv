import Select, { SingleValue } from "react-select";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  name: string;
  dataOptions: Option[];
  value: Option;
  // handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChange?: (newValue: SingleValue<Option>) => void;
}

export function CustomSelect({
  name,
  dataOptions,
  handleChange,
  value,
  ...rest
}: SelectProps) {
  return (
    <Select
      name={name}
      options={dataOptions}
      onChange={handleChange}
      defaultValue={value}
      {...rest}
    />
  );
}
