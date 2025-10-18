import { use, useEffect, useState } from "react"

function useAnimationLogin() {
        const [screen, setScreen] = useState<"login" | "signup" | "reset">("login")

        const toggleChange = (value: "login" | "signup" | "reset") => {
            setScreen(value)
        }
        return {screen , toggleChange}
      
}
export default useAnimationLogin