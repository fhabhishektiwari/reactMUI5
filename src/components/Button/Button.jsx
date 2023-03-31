import React from 'react'
import { Button} from '@mui/material'

const CustomButton = (props) => {
    const {variant,size,children,...rest}=props;
    return (
        <Button
            variant={variant||'contained'}
            size={size}
            disableRipple
            {...rest}
        > 
            {children}
        </Button>
    )
}

export default CustomButton
