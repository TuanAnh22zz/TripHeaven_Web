import { useState } from "react"

function useOpenPopup () {
    
        const [open, setOpen] = useState<"open" | "close">("close")
        

        const toggleOpen = (value: "open"|"close") => {
            setOpen(value)
        }
        return {open, toggleOpen}
   
}
export default useOpenPopup