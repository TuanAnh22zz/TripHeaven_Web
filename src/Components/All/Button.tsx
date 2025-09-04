import { colors } from "@mui/joy";
import React from "react";
import { memo, FC, ReactNode } from 'react';

interface ButtonProps  {
    children: ReactNode
    className?: string;
}

const Button: FC<ButtonProps> = ({children, className=''}) => {
    return (
  
        <button type="button" className={`text-white bg-main font-[700] text-[16px] rounded-lg  px-[35px] py-2.5 mt-[5px] relative cursor-pointer overflow-hidden uppercase group   duration-700 ${className}`}>
                  
                    <div className="z-10 relative">
                        <a href="">  
                                {children}
                        </a>
                    </div> 
                    <div className="
                        absolute
                        w-full
                        h-1/2
                        bg-[length:200%_100%] 
                        top-full
                        left-0
                        animate-wave
                        duration-300
                        group-hover:top-1/2
                      
                    " style={{backgroundImage: `url(src/assets/images/wave-yellow.svg)`}}>
                        
                    </div>
         </button>

    
    );
}

export default memo(Button);