import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"

function ScrollToTopButton () {
    const [visible, setVisible] = useState(false)

   useEffect(() => {
        const toggleVisible = () => {
            if(window.scrollY > 200)    
            {
                setVisible(true)
            }
            else
            {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisible)
        return () => window.removeEventListener("scroll", toggleVisible);
   }, []);

   const scrollToTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: 'smooth'
        })
   }

   return(  
                
                    <div onClick={scrollToTop} className={`fixed bottom-10 right-10 w-[70px] h-[70px] flex items-center justify-center group ${visible?"opacity-100 duration-500":"opacity-0 duration-500"}`}>
                        <div className='absolute animate-spin_slow w-full h-full border-[2px] border-secondary border-dashed rounded-[50%] hover:border-main  transition ease-in-out duration-500'>
                            
                        </div>
                        <button  className={`w-[60px] h-[60px] bg-secondary rounded-[50%]  transition ease-in-out duration-500 group-hover:bg-main `}>
                                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
                        </button>
                        
                    </div>
            
               
              
            
  
);
}
export default ScrollToTopButton