import { makeStyles } from "@mui/styles";
import {lightTheme,darkTheme} from '../../theme/theme'
export default makeStyles((theme)=>({
    button: {
        // margin: `${theme.spacing(0)} !important`,
    },
    small: {
        padding: `8px 16px !important`,
        fontSize: '0.8rem !important',
        // background: theme.palette.mode === 'light' ? `${lightTheme.palette.blue.dark} !important` : `${darkTheme.palette.blue.light} !important`,
        // color: theme.palette.mode === 'light' ? `${lightTheme.palette.white.main} !important` : `${darkTheme.palette.base.main} !important`,
        // '&:hover':{
        //     background: theme.palette.mode === 'light' ? `${lightTheme.palette.black.main} !important` : `${darkTheme.palette.blue.light} !important`,
        // }
    },
    medium: {
        padding: `8px 16px !important`,
        fontSize: '1rem !important',
        // background: theme.palette.mode === 'light' ? `${lightTheme.palette.blue.dark} !important` : `${darkTheme.palette.blue.light} !important`,
        // color: theme.palette.mode === 'light' ? `${lightTheme.palette.white.main} !important` : `${darkTheme.palette.base.main} !important`,
        // '&:hover': {
        //     background: theme.palette.mode === 'light' ? `${lightTheme.palette.black.main} !important` : `${darkTheme.palette.blue.light} !important`,
        // }
    },
    large: {
        padding: `8px 16px !important`,
        fontSize: '1.2rem !important',
        // background: theme.palette.mode === 'light' ? `${lightTheme.palette.blue.dark} !important` : `${darkTheme.palette.blue.light} !important`,
        // color: theme.palette.mode === 'light' ? `${lightTheme.palette.white.main} !important` : `${darkTheme.palette.base.main} !important`,
        // '&:hover': {
        //     background: theme.palette.mode === 'light' ? `${lightTheme.palette.black.main} !important` : `${darkTheme.palette.blue.light} !important`,
        // }
    }, 
}));