
import { memo, JSX } from 'react';
import React, { FC} from 'react';
import LayoutContainer from './LayoutContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faCircleUser} from '@fortawesome/free-solid-svg-icons'

const EmailIcon = <FontAwesomeIcon icon={faEnvelope} />
const PhoneIcon = <FontAwesomeIcon icon={faPhone} />


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
      href: 'mailto:nfo@themona.global', 
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
      <a href={headerTop.href} className='flex items-center text-white text-[17px]'>
        {headerTop.icon}
        <span className='ml-[10px]'> {headerTop.text}</span>
      </a>
    </li>
  );

  function HeaderTop() {
    return (
      <div className='bg-main text-white'>
   
        <LayoutContainer className='!py-[15px]'>
        <div className="flex items-center">
            <div className="w-1/2 flex items-center justify-start">
              <ul className='p-0 flex items-center gap-[50px]'>
                {contactInfo.map((item) => (
                  <ContactItem
                    key={item.type} 
                    headerTop={item}
                    
                  />
                ))}
              </ul>
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <a href="#">
                <FontAwesomeIcon icon={faCircleUser} className='text-[30px]' />
              </a>
            </div>
          </div>
        </LayoutContainer>

      </div>
    );
  }
  export default memo(HeaderTop);
