import { use, useEffect, useRef, useState } from "react"


function useAnimationScroll (threshold :number = 0.5) {
    const [view, setView] = useState(false)
    const ref = useRef<HTMLDivElement| null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((
            (entries) => {
                const entry = entries[0]
                if(entry.isIntersecting)
                {
                    setView(true)
                    observer.unobserve(entry.target)
                }
            }
        ), { threshold })


        if(ref.current)
        {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();

    },[threshold])


    return {ref, view}
}

export default (useAnimationScroll)