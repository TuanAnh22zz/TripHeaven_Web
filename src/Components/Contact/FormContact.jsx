import { memo } from 'react';
import LayoutContainer from '../../Components/All/LayoutContainer';
import Button from '../../Components/All/Button'




function FormContact () {
    return (
        <div className='bg-[#F7F7F7]'>
        <LayoutContainer>
            <div className='flex flex-wrap'>
                <div className='text-center'>
                    <div className='text-main font-[700] text-[24px] mb-[15px]'>Liên hệ chúng tôi</div>
                    <div className='text-black mt-[15px] text-[40px] uppercase font-[700]'>Liên hệ</div>
                    <div className='mt-[30px] mb-[40px] text-[#505050] px-[300px]'>Chúng tôi luôn sẵn lòng lắng nghe ý kiến, câu hỏi và đề xuất từ bạn. Trên trang liên hệ, bạn sẽ tìm thấy một biểu mẫu đơn giản mà bạn có thể điền thông tin cần thiết.</div>
                </div>

                <div> 
                    <div className='flex flex-wrap space-y-9'>
                        <div className='grid grid-cols-2 gap-x-[30px]'>
                            <div>
                                <input type="text" placeholder='Họ' className='w-[597px] p-[16px] border-main solid border-[2px] rounded-[10px]' />
                            </div>
                            <div>
                                <input type="text" placeholder='Tên' className='w-[597px] p-[16px] border-main solid border-[2px] rounded-[10px]' />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-x-[30px]'>
                            <div>
                                <input type="text" placeholder='Email' className='w-[597px] p-[16px] border-main solid border-[2px] rounded-[10px]' />
                            </div>
                            <div>
                                <input type="text" placeholder='Số điện thoại' className='w-[597px] p-[16px] border-main solid border-[2px] rounded-[10px]' />
                            </div>
                        </div>

                        <div className='w-full'>
                            <textarea name="" id="" cols="30" rows="8" placeholder='Nhập nội dung ...' className=' pl-[16px] pt-[16px] border-main solid border-[2px] rounded-[10px] w-[100%]'></textarea>
                        </div>

                        <div className='flex items-center justify-center w-full'>
                            <Button>
                                Gửi
                            </Button> 
                        </div>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    </div>
    );
}

export default memo(FormContact);