
import { memo } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LayoutContainer from '../All/LayoutContainer';
const contactInfo = [
    {
      type: 'email',
      icon: <MailIcon fontSize="large" />,
      text: 'nguyentuananh22042004@gmail.com',
      href: 'mailto:nfo@themona.global', 
    },
    {
      type: 'phone',
      icon: <PermPhoneMsgIcon fontSize="large" />,
      text: '(+84) 784223858',
      href: 'tel:+84313728397', 
    },
  ];

  const ContactItem = ({ icon, text, href }) => (
    <li>
      <a href={href} className='flex items-center text-white text-[17px]'>
        {icon}
        <span className='ml-[10px]'> {text}</span>
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
                    icon={item.icon}
                    text={item.text}
                    href={item.href}
                  />
                ))}
              </ul>
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <a href="#">
                <AccountCircleIcon fontSize="large" />
              </a>
            </div>
          </div>
        </LayoutContainer>

      </div>
    );
  }
  export default memo(HeaderTop);
