import { memo } from 'react';
import HeaderTop from '../Components/All/HeaderTop'; 
import Header from '../Components/All/Header';
import Banner from '../Components/All/Banner';
import Intro from '../Components/Introduction/Intro';
import Discover from '../Components/Homapage/Discover'
import Blog from '../Components/Homapage/Blog'
import Footer from '../Components/All/Footer'
import LayoutContainer from '../Components/All/LayoutContainer';
import HistoryBackground from '../assets/images/Introduction/map-bg.png'



function Introduction () {
    
    return (
        <div className="all">
            <HeaderTop/>
            <Header/>
            <Banner
                text1='Giới thiệu'
                text2='Trang chủ'
            />
            <Intro/>
            <div className='' style={{backgroundImage: `url(${HistoryBackground})`}}>
                <LayoutContainer>
                <div className='mb-[80px] text-center'>
                    <div className='text-main font-[700] text-[24px] mb-[15px]'>Sự ra đời</div>
                    <div className='text-black mt-[15px] text-[40px] uppercase font-[700]'>Lịch sử của chúng tôi</div>
                </div>
                <div class="grid grid-cols-2 grid-rows-3 gap-4 relative">
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0 border-l-[5px] border-main border-dashed"></div>
                   <div className='pl-[13px] pr-[100px] mt-0'>
                    <div className='bg-white solid border-[2px] border-main px-[40px] py-[30px]'>
                            <div>
                                <div className='flex flex-wrap'>
                                    <div className='w-3/4 items-center'>
                                        <h3 className='font-[700] text-[30px]'>
                                        Đổi mới công nghệ
                                        </h3>
                                    </div>
                                    <div className='w-1/4 flex items-center justify-end'>
                                        <ul className='list-disc marker:text-main'>
                                            <li className='font-[700] text-[24px] text-[#8B919C]'>
                                                2024
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-2'>

                                        <span className=''>Điều này mang đến một cách tiếp cận mới mẻ và thú vị cho việc lựa chọn địa điểm du lịch và hỗ trợ khách hàng trong việc lên kế hoạch chuyến đi của mình.</span>
                                </div>
                            </div>
                        
                        
                        </div>
                   </div>
                    
                   <div className='pl-[100px]  mt-[80px]'>
                    <div className='bg-white solid border-[2px] border-main px-[40px] py-[30px]'>
                            <div>
                                <div className='flex flex-wrap'>
                                    <div className='w-3/4 items-center'>
                                        <h3 className='font-[700] text-[30px]'>
                                            Tập trung vào trải nghiệm của khách hàng
                                        </h3>
                                    </div>
                                    <div className='w-1/4 flex items-center justify-end'>
                                        <ul className='list-disc marker:text-main'>
                                            <li className='font-[700] text-[24px] text-[#8B919C]'>
                                                2023
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-2'>

                                        <span className=''>Trong năm 2023, Trip Haven tập trung vào việc cải thiện trải nghiệm của khách hàng. Công ty đầu tư vào đội ngũ chăm sóc khách hàng chuyên nghiệp để hỗ trợ và giải đáp mọi thắc mắc của khách hàng. Ngoài ra, Vivu tăng cường việc thu thập ý kiến phản hồi từ khách hàng để cải tiến hệ thống và đảm bảo sự hài lòng của người dùng.</span>
                                </div>
                            </div>
                        
                        
                        </div>
                   </div>

                   <div className='pl-[13px] pr-[100px] mt-0'>
                    <div className='bg-white solid border-[2px] border-main px-[40px] py-[30px]'>
                            <div>
                                <div className='flex flex-wrap'>
                                    <div className='w-3/4 items-center'>
                                        <h3 className='font-[700] text-[30px]'>
                                            Tích hợp công nghệ                                     
                                        </h3>
                                    </div>
                                    <div className='w-1/4 flex items-center justify-end'>
                                        <ul className='list-disc marker:text-main'>
                                            <li className='font-[700] text-[24px] text-[#8B919C]'>
                                                2022
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-2'>

                                        <span className=''>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictgum ultricies ligula sed portga.</span>
                                </div>
                            </div>
                        
                        
                        </div>
                   </div>

                     <div className='pl-[100px]  mt-[80px]'>
                    <div className='bg-white solid border-[2px] border-main px-[40px] py-[30px]'>
                            <div>
                                <div className='flex flex-wrap'>
                                    <div className='w-3/4 items-center'>
                                        <h3 className='font-[700] text-[30px]'>
                                            Sự phát tiển

                                        </h3>
                                    </div>
                                    <div className='w-1/4 flex items-center justify-end'>
                                        <ul className='list-disc marker:text-main'>
                                            <li className='font-[700] text-[24px] text-[#8B919C]'>
                                                2021
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-2'>

                                        <span className=''>Năm 2022 đánh dấu sự mở rộng và phát triển đáng kể của Trip Haven về quy mô và phạm vi hoạt động. Trip Haven mở rộng thị trường đến nhiều địa điểm du lịch mới, cung cấp thông tin chi tiết và dịch vụ đặt phòng tại các điểm đến hấp dẫn trên toàn quốc. Công ty cũng tăng cường quan hệ đối tác với các nhà cung cấp dịch vụ du lịch để mang đến sự đa dạng và chất lượng cho khách hàng.</span>
                                </div>
                            </div>
                        
                        
                        </div>
                   </div>

                   <div className='pl-[13px] pr-[100px] mt-0'>
                    <div className='bg-white solid border-[2px] border-main px-[40px] py-[30px]'>
                            <div>
                                <div className='flex flex-wrap'>
                                    <div className='w-3/4 items-center'>
                                        <h3 className='font-[700] text-[30px]'>
                                             Mở rộng dịch vụ
                                        </h3>
                                    </div>
                                    <div className='w-1/4 flex items-center justify-end'>
                                        <ul className='list-disc marker:text-main'>
                                            <li className='font-[700] text-[24px] text-[#8B919C]'>
                                                2020
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-2'>

                                        <span className=''>Trong năm 2020, Trip Haven mở rộng danh mục dịch vụ của mình bằng cách hợp tác với nhiều đối tác trong ngành du lịch. Điều này cho phép Vivu cung cấp một loạt các dịch vụ bổ sung, bao gồm vé máy bay, đưa đón sân bay, thuê xe và nhiều hơn nữa. Khách hàng có thể tận hưởng trọn vẹn trải nghiệm du lịch thông qua một nền tảng duy nhất.</span>
                                </div>
                            </div>
                        
                        
                        </div>
                   </div>

                   <div className='pl-[100px]  mt-[80px]'>
                    <div className='bg-white solid border-[2px] border-main px-[40px] py-[30px]'>
                            <div>
                                <div className='flex flex-wrap'>
                                    <div className='w-3/4 items-center'>
                                        <h3 className='font-[700] text-[30px]'>
                                            Sự ra đời
                                        </h3>
                                    </div>
                                    <div className='w-1/4 flex items-center justify-end'>
                                        <ul className='list-disc marker:text-main'>
                                            <li className='font-[700] text-[24px] text-[#8B919C]'>
                                                2019
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-2'>

                                        <span className=''>Vào năm 2019, công ty du lịch Trip Haven được thành lập với mục tiêu cung cấp các dịch vụ du lịch đáng tin cậy và tiện lợi cho khách hàng. Vivu ra mắt trang web và ứng dụng di động, cung cấp thông tin về các địa điểm du lịch, đặt phòng khách sạn và tour du lịch.</span>
                                </div>
                            </div>
                        
                        
                        </div>
                   </div>
                </div>
               

                </LayoutContainer>
            </div>
            <Discover/>
            <Blog/>
            <Footer/>

         

        </div>
    );
}
export default memo(Introduction);