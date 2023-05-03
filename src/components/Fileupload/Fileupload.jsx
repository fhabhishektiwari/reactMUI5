import { Box, Button, IconButton, Input, InputAdornment, TextField, Typography } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
export default function FileUpload() {
    const { getRootProps, getInputProps, isDragActive } = useDropzone();

    return (
        <Box {...getRootProps()} sx={{width:'156px',height:'156px',borderRadius:4,boxShadow:'0 0 10px #000',m:'20px auto'}}>
            <input {...getInputProps()} />
            {/* <TextField
                variant="outlined"
                fullWidth
                // InputProps={{
                //     startAdornment: (
                //         <InputAdornment position="start">
                //             <IconButton>
                //                 <CloudUpload />
                //             </IconButton>
                //         </InputAdornment>
                //     ),
                //     endAdornment: (
                //         <InputAdornment position="end">
                //             <Button color="primary" variant="contained">
                //                 Upload
                //             </Button>
                //         </InputAdornment>
                //     ),
                // }}
                value={isDragActive ? 'Drop your file here' : 'Click to select a file'}
                disabled
                sx={{height:'150px'}}
            /> */}

            <Box>
                <Typography>Upload File</Typography>
            </Box>

        </Box>
    );
}
