import { type } from "os"
import { use, useRef, useState, useEffect } from "react"

export function useCountdown (day: number = 5) {
  

   
        const targetRef = useRef<number>(Date.now() + day * 24 * 60 * 60 * 1000);
        const [timeleft, setTimeleft] = useState<number>(Math.max(0, targetRef.current - Date.now()));

        useEffect(() => {
            const tick = () => {
                setTimeleft(Math.max(0, targetRef.current - Date.now()))
            }
            tick()

            const everySecond = setInterval(tick, 1000);
            return () => clearInterval(everySecond); 

        }, [])

        return {
            dayNum: Math.floor(timeleft / (1000 * 60 * 60 * 24)),
            hourNum: Math.floor((timeleft / (1000 * 60 * 60)) % 24),
            minuteNum: Math.floor((timeleft /  (1000 * 60)) % 60),
            secondNum: Math.floor((timeleft / 1000) % 60)
        }; 
}
