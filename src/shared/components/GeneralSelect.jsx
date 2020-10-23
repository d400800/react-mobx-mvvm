import React from 'react';

import {Select, FormControl, InputLabel, MenuItem} from "@material-ui/core";

const GeneralSelect = ({label='', value, options, handleChange, kField='name', vField='id'}) => (
    <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>

        <Select value={value} onChange={handleChange} fullWidth>
            {options.map((option, i) => (
                <MenuItem key={i} value={option[vField]}>
                    {option[kField]}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default GeneralSelect;