import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { list } from "../../../../list";
import { DataContext, DataContextType } from "../../../../GlobalStates/DataProvider";

function valuetext(value: number): string {
  return `${value}°C`;
}

export default function RangeSlider() {
  const { setFinalrange } = React.useContext(DataContext) as DataContextType;

  const Years = list.map((item) => item.Year);
  const MinYear = Math.min(...Years);
  const MaxYear = Math.max(...Years);

  const [value, setValue] = React.useState<number[]>([MinYear, MaxYear]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  React.useEffect(() => {
    setFinalrange(value);
  }, [value, setFinalrange]);

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        min={MinYear}
        step={1}
        max={MaxYear}
        getAriaLabel={() => "Year range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        name="Year"
      />
    </Box>
  );
}
