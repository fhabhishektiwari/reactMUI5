import * as React from 'react';
import { IconButton} from '@mui/material';
import { FilterLists } from './FilterLists';
import FilterListIcon from '@mui/icons-material/FilterList';
import useStyles,{StyledMenu} from './styles';

export default function FilterUI() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                className={classes.actionButton}
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                disableRipple
                onClick={handleClick}
                sx={{ width: '32px', height: '32px' }}
            >
                {/* <Typography className='fh-icon fh-icon-filter' />
                 */}
                <FilterListIcon/>
            </IconButton>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <FilterLists/>
            </StyledMenu>
        </>
    );
}
