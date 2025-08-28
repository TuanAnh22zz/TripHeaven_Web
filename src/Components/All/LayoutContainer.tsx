import React from "react";
import { memo , FC, ReactNode} from 'react';

interface LayoutContainerProps {
    children : ReactNode;
    className?: string;
}
const LayoutContainer: FC<LayoutContainerProps> = ({children, className=''}) => {
    return (
        <div className={`container max-w-[1370px] mx-auto bg-transparent py-[80px] px-[80px] ${className}`}>
            {children}
        </div>
    
    );
}

export default memo(LayoutContainer);