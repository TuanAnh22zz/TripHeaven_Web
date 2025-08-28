import { memo, FC } from 'react';
import LogoImage from '../../assets/images/1-e1709277145445.png'
import LayoutContainer from './LayoutContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faMagnifyingGlass, faAngleDown} from '@fortawesome/free-solid-svg-icons'
interface HeaderProps {
    id: number,
    text: string
}
const infoMenu: HeaderProps[] =  [
    {
        id: 1,
        text:'Trang chủ'
    },
    {
        id: 2,
        text:'Giới thiệu'
    },
  
    {
        id: 3,
        text:'Tin tức'
    },
    {
        id: 4,
        text:'Liên hệ',
    },
    
]

interface RenderHeader { 
    header: HeaderProps
}
   



const HeaderMenu: FC<RenderHeader> = ({header}) => (
    <li>
        <a href="http://" className='flex text-[#1C1C1C] text-[20px] font-[700]'>{header.text}</a>
    </li>
    
);

function Header () {
    return (
        <div className="py-[30px] bg-white">
        <LayoutContainer className='!py-[10px]'>
        <div className="w-[100%] grid grid-cols-[1fr_3fr] flex-wrap">
                <div className="flex items-center">
                    <div className='img__logo'>
                        <a href="">
                            <img src={LogoImage} alt="logo_image" width={"220px"} height={"64px"} />
                        </a>
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
                                <li className='flex items-center gap-x-[5px]'>
                                    <a href="http://" className='flex text-[#1C1C1C] text-[20px] font-[700]'>Tour</a>
                                     <FontAwesomeIcon icon={faAngleDown} className='text-black text-[20px]' />

                                </li>
                        </ul> 
                    </div>
                    <div className="flex items-center justify-end gap-[20px]">
                        <div className="search__button">
                            <button className='w-[60px] h-[60px] rounded-[60%] bg-main flex items-center justify-center'>
                                 <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white text-[20px]'/>
                            </button>
                        </div>
                        <div className="info_button">
                             <button className='w-[60px] h-[60px] rounded-[60%] bg-main flex items-center justify-center'>
                                <FontAwesomeIcon icon={faBars} className='text-white text-[20px]' />
                            </button>   
                        </div>
                    </div>

                </div>
            </div>
        </LayoutContainer>
    </div>
    );
}
export default memo(Header);