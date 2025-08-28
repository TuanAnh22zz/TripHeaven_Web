import { memo } from 'react';
import Button from '../All/Button';
import BannerBackgroundImage from '../../assets/images/hero2-bg.jpg'
import LayoutContainer from '../All/LayoutContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPersonSwimming,faClockFour, faDollarSign, faChevronDown} from '@fortawesome/free-solid-svg-icons';

const bannerInfo = 
    {
        sub_title: 'Khám phá ngay',
        title: 'Hành trình thú vị đang chờ đợi',
        text: 'Chào mừng bạn đến với trang chủ của chúng tôi, nơi bạn có thể khám phá và trải nghiệm những chuyến du lịch tuyệt vời. Chúng tôi tự hào là một đơn vị hàng đầu trong ngành du lịch, mang đến cho bạn những trải nghiệm đáng nhớ và không thể quên.',
        buttonText: 'Xem thêm',
    };
const bannerSearch = [
    {
        id: 'destination',
        placeholder: 'Điểm đến',    
        icon: <FontAwesomeIcon icon={faLocationDot}/>,
    
    },
    {
        id: 'activity',
        placeholder: 'Hoạt động',    
        icon: <FontAwesomeIcon icon={faPersonSwimming} />,
    
    },
    {
        id: 'duration',
        placeholder: '0 ngày - 8 ngày',    
        icon: <FontAwesomeIcon icon={faClockFour}/>,
    
    },
    {
        id: 'price',
        placeholder: '1,500,000đ - 5,000,000đ',    
        icon: <FontAwesomeIcon icon={faDollarSign} />
    
    }


]
const SearchField = ({icon, placeholder}) => (
    <div className='py-[15px] px-[20px]'>
      
           <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           {icon}
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-[15px] rounded-lg solid border-main border-[1px] " placeholder={placeholder} required />
        <FontAwesomeIcon icon={faChevronDown} className='absolute end-2.5 bottom-5'/>
    </div>
     </div>

   
)
function Banner() {
    return (
        <div className="bg-no-repeat w-full bg-cover bg-center"   style={{ backgroundImage: `url(${BannerBackgroundImage})` }}>
   
        <LayoutContainer>
        <div className="flex flex-wrap">
                <div className="w-1/2 flex mr-auto">
                    <div className="">
                        <span className='font-[700] text-[24px] mb-[15px] text-transparent-[capitalize] text-[#4CAF50] '>{bannerInfo.sub_title}</span>
                        <h2 className='mt-[15px] font-[700] text-[64px] text-white uppercase '>{bannerInfo.title}</h2>
                        <p className='text-white leading-[26px] mt-[30px] mb-[40px] pr-[200px]'>{bannerInfo.text} </p>
                        <div className='btn_wrapper'>
                            
                            <Button>
                                  <a href="">Xem thêm</a>
                            </Button>
                           
                    
                        </div>
                    </div>

                </div>
                <div className="w-1/2 flex justify-end items-center mr-auto">
                    <div className="info__banner__right">
                        <form action="" className='bg-white border-main border-solid border-[4px] rounded-[5px]'>
                            {bannerSearch.map((item) => (
                             < SearchField
                                    key={item.id}
                                    icon={item.icon}
                                    placeholder={item.placeholder}
                            />
                            ))}
                        <div className='py-[25px] px-[20px]'>
                                <button className='py-[10px] w-[400px] bg-main text-white text-[16px] font-[700]'>
                                     Tìm Ngay
                                </button>
                        </div>
                        
                        </form>
                    </div>
                   
                </div>
            </div>
        </LayoutContainer>

    </div>
    );

}
export default memo(Banner);
