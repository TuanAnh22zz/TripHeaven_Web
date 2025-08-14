import { memo } from 'react';
import LogoImage from '../../assets/images/1-e1709277145445.png'
import  MaterialButton from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LayoutContainer from './LayoutContainer';

const infoMenu = [
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
        text:'Tour'
    },
    {
        id: 4,
        text:'Tin tức'
    },
    {
        id: 5,
        text:'Liên hệ',
    },
    
]
   



const HeaderMenu = ({text}) => (
    <li>
        <a href="http://" className='flex text-[#1C1C1C] text-[20px] font-[700]'>{text}</a>
    </li>
    
);

function Header () {
    return (
        <div className="py-[40px] bg-white">
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
                                    text={item.text}
                                />
                           ))}
                        </ul> 
                    </div>
                    <div className="flex items-center justify-end gap-[20px]">
                        <div className="search__button">
    
                        <MaterialButton variant="contained" disableElevation style={{width: '40px', height: '60px', borderRadius:'60%', backgroundColor: "#4CAF50"}}>
                               <SearchIcon/>
                        </MaterialButton>
                        </div>
                        <div className="info_button">
                        <MaterialButton variant="contained" disableElevation style={{width: '40px', height: '60px', borderRadius:'60%', backgroundColor: "#4CAF50"}}>
                            <MenuIcon/>
                          </MaterialButton>
                        </div>
                    </div>

                </div>
            </div>
        </LayoutContainer>
    </div>
    );
}
export default memo(Header);