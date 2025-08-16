import React from "react";
import { memo } from 'react';
import  MaterialButton from '@mui/material/Button'
function Button({children, className = ''})  {
    return (
  
         <MaterialButton variant="contained" disableElevation sx={{
         borderRadius: '5px',
         backgroundColor: 'main',
         fontSize: '16px',
         fontWeight: 700,
         padding: '8px 30px',}} className={`!bg-main ${className}`}>
             {children}
         </MaterialButton>
    
    );
}

export default memo(Button);