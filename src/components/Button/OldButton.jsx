import React from 'react'
import { Button as MuiButton } from '@mui/material'
import styled from '@emotion/styled'
const CustomButton = (props) => {
    // const MyCustomButton = styled(Button)(({ theme }) => ({
    //     // padding:30,
    //     padding: theme.spacing(5),
    //     // background:console.log('theme',theme),
    //     background: theme.palette.mode === 'light' ? `${lightTheme.palette.primary.main}` : `${darkTheme.palette.secondary.main}`,
    //     color: theme.palette.mode === 'light' ? `${lightTheme.palette.white.main}` : `${darkTheme.palette.black.main}`,
    //     '&:hover': {
    //         background: 'red',
    //     }
    // }));
    const { buttonText, variant } = props
    const MyCustomeButton = styled(MuiButton)(({ theme }) => ({
        background: theme.palette.mode === 'light' ? 'red' : 'blue',
        color: theme.palette.mode === 'light' ? '#000' : '#FFF',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'light' ? 'darkred' : 'darkblue',
        },
    }))
    return (
        <>
        {/* 
        <MyCustomButton variant = 'contained' > Custom Button</MyCustomButton >
        */
        }
        <MyCustomeButton variant={variant || 'contained'}>{buttonText}</MyCustomeButton>
        </>
    )
}

export default CustomButton