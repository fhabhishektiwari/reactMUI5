import React from 'react'
import { Button as MuiButton } from '@mui/material'
import styled from '@emotion/styled'
const CustomButton = (props) => {
    const { buttonText,variant }=props
    const MyCustomeButton=styled(MuiButton)(({theme})=>({
        background:theme.palette.mode==='light' ? 'red':'blue',
        color: theme.palette.mode === 'light'?'#000':'#FFF',
        '&:hover':{
            backgroundColor: theme.palette.mode === 'light'?'darkred':'darkblue',
        },
    }))
  return (
      <MyCustomeButton variant={variant || 'contained'}>{buttonText}</MyCustomeButton>
  )
}

export default CustomButton
