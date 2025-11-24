
import { memo, JSX } from 'react';
import React, { FC} from 'react';
import { Link } from 'react-router-dom';
import LayoutContainer from '../../components/All/LayoutContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faCircleUser} from '@fortawesome/free-solid-svg-icons'

const EmailIcon = <FontAwesomeIcon icon={faEnvelope}  className='group-hover:text-white text-[#4CAF50] duration-1000'/>
const PhoneIcon = <FontAwesomeIcon icon={faPhone}  className='group-hover:text-white text-[#4CAF50] duration-1000' />


interface HeaderTopProps {
  type: string,
  icon: JSX.Element,
  text: string,
  href: string,
}

const contactInfo: HeaderTopProps[] = [
    {
      type: 'email',
      icon: EmailIcon,
      text: 'nguyentuananh22042004@gmail.com',
      href: 'mailto:nguyentuananh22042004@gmail.com', 
    },
    {
      type: 'phone',
      icon: PhoneIcon,
      text: '(+84) 784223858',
      href: 'tel:+84313728397', 
    },
  ];

interface RenderHeaderTop {
    headerTop: HeaderTopProps
}

const ContactItem: FC<RenderHeaderTop> = ({headerTop}) => (
    <li>
      <a href={headerTop.href} className='flex items-center text-white text-[17px] group'>
        <div className='w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[50%] group-hover:bg-secondary duration-500 ease-in-out'>
           {headerTop.icon}
        </div>
    
        <span className='ml-[10px] group-hover:text-secondary duration-500'> {headerTop.text}</span>
      </a>
    </li>
  );

  function HeaderTop() {
    return (
      <div className='bg-main text-white'>
   
        <LayoutContainer className='!py-[15px]'>
        <div className="flex ">
            <div className="w-1/2 flex items-center justify-start">
              <ul className='p-0 flex items-center gap-x-[50px]'>
                {contactInfo.map((item) => (
                  <ContactItem
                    key={item.type} 
                    headerTop={item}
                    
                  />
                ))}
              </ul>
            </div>
            <div className="w-1/2 flex items-center justify-end ">
              <div className=''>
                  <Link to="/account">
                    <FontAwesomeIcon icon={faCircleUser} className='text-[35px] hover:text-secondary ease-in-out duration-500'/>
                    
                  </Link>
              </div>
            
            </div>
          </div>
        </LayoutContainer>

      </div>
    );
  }
  export default memo(HeaderTop);
