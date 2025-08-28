import { memo } from 'react';

import LayoutContainer from '../../Components/All/LayoutContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faAddressBook ,faClockFour} from '@fortawesome/free-solid-svg-icons';

function InfoContact () {
    return (
        <div>
                <LayoutContainer>
                    <div className='flex flex-wrap bg-main p-[60px] rounded-[10px] '>
                        <div className='grid grid-cols-3 gap-x-[30px]'>
                            <div className='flex items-center bg-white rounded-[10px] px-[30px] py-[40px]'>
                                <div className='w-1/4'>
                                    <div className='w-[60px] h-[60px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center bg-main'>
                                        <FontAwesomeIcon icon={faLocationDot} className="text-white text-[25px]" />
                                    </div>
                                </div>
                                <div className='w-3/4'>
                                    <div>
                                        <h3 className='font-[600] text-[20px]'>Địa chỉ</h3>
                                        <p className='text-[14px]'>1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='flex items-center bg-white rounded-[10px] px-[30px] py-[40px]'>
                                <div className='w-1/4'>
                                    <div className='w-[60px] h-[60px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center bg-main'>
                                         <FontAwesomeIcon icon={faAddressBook} className="text-[25px] text-white" />
                                    </div>
                                </div>
                                <div className='w-3/4'>
                                    <div>
                                        <h3 className='font-[600] text-[20px]'>Liên hệ</h3>
                                        <p className='text-[14px]'>Mobile: (+84) 784223858</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='flex items-center bg-white rounded-[10px] px-[30px] py-[40px]'>
                                <div className='w-1/4'>
                                    <div className='w-[60px] h-[60px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center bg-main'>
                                          <FontAwesomeIcon icon={faClockFour} className="text-white text-[25px]"/>
                                    </div>
                                </div>
                                <div className='w-3/4'>
                                    <div>
                                        <h3 className='font-[600] text-[20px]'>Giờ làm việc</h3>
                                        <p className='text-[14px]'>Thứ hai - Thức sáu: 9:00 - 18:00</p>
                                        <p className='text-[14px]'>Thứ bảy & Chủ nhật: 9:00 - 12:00</p>

                                    </div>
                                </div>
                                
                            </div>

                            

                        </div>
                    </div>
                </LayoutContainer>
            </div>
    );
}

export default memo(InfoContact)