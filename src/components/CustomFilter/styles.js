import { Menu } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';



export default makeStyles(theme=>({
    filterContainer:{
        p: 2,
        maxHeight: '343px',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: '0.2em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
        }
    },
    actionButton: {
        '&:hover': {
            backgroundColor: `#d5d5d5 !important`,
        }
    }
}))

export const StyledMenu = styled((props) => (
    <Menu
        elevation={2}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 4,
        // border: '1px solid rgba(0,0,0,.15) !important',
        boxShadow:'0 0 10px rgba(0,0,0,.15)',
        // marginTop: theme.spacing(1),
        minWidth: 250,
        '& .MuiMenu-list': {
            padding: '0px',
        },
    },
}));