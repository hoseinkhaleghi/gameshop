import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { list } from "../../../list";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider() {
    const Years = list.map((item) => item.Year);
    const MinYear = Math.min(...Years);
    const MaxYear = Math.max(...Years);
  
  const [value, setValue] = React.useState<number[]>([MinYear, MaxYear]);
  const handleChange = (event: Event, currentyear: number | number[]) => {
    setValue(currentyear as number[]);
  };
//   console.log(value)
  return (
    <Box  sx={{ width: 200 }}>
      <Slider
        min={MinYear}
        step={1}
        max={MaxYear}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        name='Year'
      />
    </Box>
  );
}