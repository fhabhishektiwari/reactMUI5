import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography, Divider } from '@mui/material';

export default function ReusableSelect(props) {
    const { label, options, value, onChange } = props;
    const [selectedValue, setSelectedValue] = useState(value);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        // onChange(event.target.value);
    };

    return (
        <>
        {/* <InputLabel>{label}</InputLabel> */}
        <FormControl fullWidth>
            <Select value={selectedValue} onChange={handleChange} size='small'>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value} sx={{display:'block',borderBottom:'1px solid #ddd',ml:1,mr:1}}>
                        {/* {option.label} */}
                        <Box sx={{display:'flex',alignItems:'center'}}>
                        <Box sx={{width:'36px',height:'36px'}}>
                                <img style={{ width: '36px', height: '36px', borderRadius: 4 }} src={option.src} alt="" /> 
                        </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2em' }}><Typography variant='body3' sx={{ ml: 1,fontWeight:'900' }}>{option.label}</Typography><Typography variant='body4' sx={{ ml: 1 }}>{option.label}</Typography></Box>
                        </Box>
                    </MenuItem> 
                ))}
            </Select>
        </FormControl>
        </>
    );
}
