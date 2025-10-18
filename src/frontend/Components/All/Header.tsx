import { memo, FC } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/1-e1709277145445.png'
import LayoutContainer from './LayoutContainer';
import PopupSeach from '../Popup/PopupSeach';
import PopupInfo from '../Popup/PopupInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faMagnifyingGlass, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import useOpenPopup from '../../Hook/All/useOpenPopup';
interface HeaderProps {
    id: number,
    text: string
    link: string
}
const infoMenu: HeaderProps[] =  [
    {
        id: 1,
        text:'Trang chủ',
        link:"/"
    },
    {
        id: 2,
        text:'Giới thiệu',
        link:"/introduction"
    },
  
    {
        id: 3,
        text:'Tin tức',
        link:"/blog"
    },
    {
        id: 4,
        text:'Liên hệ',
        link:"/contact"
    },
    
]

interface RenderHeader { 
    header: HeaderProps
}   
   



const HeaderMenu: FC<RenderHeader> = ({header}) => (
    <li className=''>
        <Link to={header.link} className='flex text-[#1C1C1C] text-[20px] font-[700] hover:text-secondary transition duration-500'>{header.text}</Link>
    </li>
    
);

function Header () {
    
    const {open, toggleOpen} = useOpenPopup();
    const {open: openInfo, toggleOpen: toggleInfo} = useOpenPopup();
    return (
        <div className="py-[30px] bg-white">
        <LayoutContainer className='!py-[10px]'>
        <div className="w-[100%] grid grid-cols-[1fr_3fr] flex-wrap">
                <div className="flex items-center">
                    <div className='img__logo'>
                        <Link to="/">
                            <img src={LogoImage} alt="logo_image" width={"220px"} height={"64px"} />
                        </Link>
                    </div>

                </div>

                <div className="flex justify-end items-center">
                    <div className="flex items-center justify-center "> 
                        <ul className='flex gap-[40px] pr-[50px] '>
                           {infoMenu.map((item) => (
                                <HeaderMenu
                                    key={item.id}
                                    header={item}
                                />
                           
                          
                           ))}      
                                <li className='flex items-center gap-x-[5px] group'>
                                    <Link to="/destination" className='flex text-[#1C1C1C] text-[20px] font-[700] group-hover:text-secondary transition duration-500'>Tour</Link>
                                     <FontAwesomeIcon icon={faAngleDown} className='text-black text-[20px] group-hover:text-secondary transition duration-500' />

                                </li>
                        </ul> 
                    </div>
                    <div className="flex items-center justify-end gap-[20px]">
                        <div className="search__button">
                            <button className="w-[60px] h-[60px] rounded-[60%] bg-main flex items-center justify-center hover:bg-secondary duration-700 ease-in-out" onClick={() => toggleOpen("open")}>
                                 <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white text-[20px] '/>
                            </button>
                        </div>
                        <div className="info_button">
                             <button className='w-[60px] h-[60px] rounded-[60%] bg-main flex items-center justify-center hover:bg-secondary duration-700 ease-in-out' onClick={() => toggleInfo("open")}>
                                <FontAwesomeIcon icon={faBars} className='text-white text-[20px]' />
                            </button>   
                        </div>
                    </div>

                </div>
            </div>
        </LayoutContainer>
        {open==="open" && <PopupSeach toggleOpen={toggleOpen}/>}
        {openInfo==="open" && <PopupInfo toggleOpen={toggleInfo}/>}
    </div>

    
    );
}
export default memo(Header);