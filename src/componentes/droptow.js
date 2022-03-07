
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
    const [More, setMore] = React.useState('');
  
    const handleChange = (event) => {
      setMore(event.target.value);
    };
  
    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">View More</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={More}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Activities</MenuItem>
            <MenuItem value={20}>Comments</MenuItem>
            <MenuItem value={30}></MenuItem>
          </Select>
        </FormControl>
        </div>
  );
}
