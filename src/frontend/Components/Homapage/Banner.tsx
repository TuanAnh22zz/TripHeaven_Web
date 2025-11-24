import { memo, FC, JSX } from 'react';
import Button from '../All/Button';
//@ts-ignore
import BannerBackgroundImage from '../../assets/images/hero2-bg.jpg'
import LayoutContainer from '../All/LayoutContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPersonSwimming,faClockFour, faDollarSign, faChevronDown} from '@fortawesome/free-solid-svg-icons';
const LocationIcon =<FontAwesomeIcon icon={faLocationDot}/>
const PersonSwimmingIcon = <FontAwesomeIcon icon={faPersonSwimming} />
const ClockFourIcon= <FontAwesomeIcon icon={faClockFour}/>
const DollarSignIcon=  <FontAwesomeIcon icon={faDollarSign} />

export interface InfoBannerProps {
    sub_title: string,
    title: string,
    text: string,
    buttonText: string
}
const bannerInfo: InfoBannerProps[] = [
    {
        sub_title: 'Khám phá ngay',
        title: 'Hành trình thú vị đang chờ đợi',
        text: 'Chào mừng bạn đến với trang chủ của chúng tôi, nơi bạn có thể khám phá và trải nghiệm những chuyến du lịch tuyệt vời. Chúng tôi tự hào là một đơn vị hàng đầu trong ngành du lịch, mang đến cho bạn những trải nghiệm đáng nhớ và không thể quên.',
        buttonText: 'Xem thêm',
    }

]
    

export interface BannerSearchProps {
    id: string,
    placeholder: string,
    icon: JSX.Element
}
const bannerSearch = [
    {
        id: 'destination',
        placeholder: 'Điểm đến',    
        icon: LocationIcon
    
    },
    {
        id: 'activity',
        placeholder: 'Hoạt động',    
        icon: PersonSwimmingIcon
    
    },
    {
        id: 'duration',
        placeholder: '0 ngày - 8 ngày',    
        icon: ClockFourIcon
    
    },
    {
        id: 'price',
        placeholder: '1,500,000đ - 5,000,000đ',    
        icon: DollarSignIcon
    
    }


]
interface RenderBannerSearch {
    banner: BannerSearchProps
}
const SearchField: FC<RenderBannerSearch> = ({banner}) => (
    <div className='py-[15px] px-[20px]'>
      
           <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           {banner.icon}
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-[15px] rounded-lg solid border-main border-[1px] " placeholder={banner.placeholder} required />
        <FontAwesomeIcon icon={faChevronDown} className='absolute end-2.5 bottom-5'/>
    </div>
     </div>

   
)



function Banner() {
    return (
        <div className="bg-no-repeat w-full bg-cover bg-center"   style={{ backgroundImage: `url(${BannerBackgroundImage})` }}>
   
        <LayoutContainer>
        <div className="flex flex-wrap">
                <div className="w-1/2 flex mr-auto animate-slideInLeft">
                    <div className="">
                        <span className='font-[700] text-[24px] mb-[15px] text-transparent-[capitalize] text-[#4CAF50] '>{bannerInfo[0].sub_title}</span>
                        <h2 className='mt-[15px] font-[700] text-[64px] text-white uppercase '>{bannerInfo[0].sub_title}</h2>
                        <p className='text-white leading-[26px] mt-[30px] mb-[40px] pr-[200px]'>{bannerInfo[0].text} </p>
                        <div className='btn_wrapper'>
                            
                            <Button>
                                  
                                    <span>
                                        {bannerInfo[0].buttonText}
                                    </span>
                                 
                            </Button>
                           
                    
                        </div>
                    </div>

                </div>
                <div className="w-1/2 flex justify-end items-center mr-auto animate-slideInRight">
                    <div className="info__banner__right">
                        <form action="" className='bg-white border-main border-solid border-[4px] rounded-[5px]'>
                            {bannerSearch.map((item) => (
                             < SearchField
                                    key={item.id}
                                    banner={item}
                            />
                            ))}
                        <div className='py-[25px] px-[20px]'>
                                <button className='py-[10px] w-[400px] bg-main text-white text-[16px] font-[700] hover:bg-secondary ease-in-out duration-500'>
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
