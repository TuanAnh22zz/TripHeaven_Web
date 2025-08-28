import React from "react";
import { memo, FC, ReactNode } from 'react';

interface ButtonProps  {
    children: ReactNode
}

const Button: FC<ButtonProps> = ({children}) => {
    return (
  
        <button type="button" className="text-white bg-main font-[700] text-[16px] rounded-lg  px-5 py-2.5 mt-[5px]">
                 {children}
         </button>
     

    
    );
}

export default memo(Button);