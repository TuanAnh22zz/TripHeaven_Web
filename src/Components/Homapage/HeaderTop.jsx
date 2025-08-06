
import { memo } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const contactInfo = [
    {
      type: 'email',
      icon: <MailIcon fontSize="large" />,
      text: 'nfo@themona.global',
      href: 'mailto:nfo@themona.global', 
    },
    {
      type: 'phone',
      icon: <PermPhoneMsgIcon fontSize="large" />,
      text: '(+84) 0313728397',
      href: 'tel:+84313728397', 
    },
  ];

  const ContactItem = ({ icon, text, href }) => (
    <li>
      <a href={href} className="contact_link">
        {icon}
        <span> {text}</span>
      </a>
    </li>
  );

  function HeaderTop() {
    return (
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__left">
              <ul>
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
            <div className="col-6 header__right">
              <a href="#">
                <AccountCircleIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default memo(HeaderTop);
