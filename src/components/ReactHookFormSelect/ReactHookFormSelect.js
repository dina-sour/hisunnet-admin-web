import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";
import styled from 'styled-components';

const ReactHookFormSelect = ({
  name,
  label,
  control,
  value,
  children,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        as={
          <SelectInput labelId={labelId} label={label}>
            {children}
          </SelectInput>
        }
        name={name}
        control={control}
        defaultValue={value || ''}
        displayEmpty 
      />
    </FormControl>
  );
};

const SelectInput = styled(Select)`
  &&{
  width: 150px;
  direction: rtl;
  border-radius: 100px;
  color: #525558;
  }
`;

export default ReactHookFormSelect;