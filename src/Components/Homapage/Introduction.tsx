
import { memo,FC } from 'react';
import IntroductionBackground from '../../assets/images/plane2-2zxczxc.png'
import LayoutContainer from '../All/LayoutContainer';
import Button from '../All/Button';
import Image1 from '../../assets/images/about-1-1.jpg'
import Image2 from '../../assets/images/about-1-2.jpg'
import Image3 from '../../assets/images/about-1-3.jpg'
import useAnimationScroll from '../Hook/useAnimationScroll';

export interface InfoIntroProps {
    sub_title: string
    title: string
    text:string
    buttonText:string
}
const introInfo: InfoIntroProps[] = [
    {
        sub_title: 'Giới thiệu',
        title: 'Chuyến đi tốt nhất',
        text:'Chúng tôi đảm bảo chất lượng dịch vụ tốt nhất, đội ngũ hướng dẫn viên chuyên nghiệp và sự tỉ mỉ trong từng chi tiết. Chúng tôi sẽ là người đồng hành đáng tin cậy trong hành trình khám phá thế giới của bạn.',
        buttonText:'Xem thêm',
    }
]  

export interface IntroTextProps {
    id: number
    text:string
}
const introText:IntroTextProps[]  = [
    {
        id: 1,
        text:'Điểm đến độc đáo'
    },
    {
        id: 2,
        text:'Hoạt động thú vị'
    },
    {
        id: 3,
        text:'Lịch trình linh hoạt'
    },
    {
        id: 4,
        text:'An toàn hàng đầu'
    },
    {
        id: 5,
        text:'Trải nghiệm văn hóa'
    },
    {
        id: 6,
        text:'Dịch vụ chất lượng'
    },
    {
        id: 7,
        text:'Kỷ niệm đáng nhớ'
    },


];
interface RenderIntroText {
    intro: IntroTextProps
}

const IntroItem: FC<RenderIntroText> = ({intro}) => (
    <li className='list-disc marker:text-main'>
        {intro.text}
    </li>
)


function Introduction() {
    const { ref: ref1, view: view1 } = useAnimationScroll(0.3);
    const { ref: ref2, view: view2 } = useAnimationScroll(0.3);
    return (  
        <div style={{backgroundImage: `url(${IntroductionBackground})`}} className='bg-no-repeat '>
             <div className="bg-white/70">
          
        <LayoutContainer>
        <div className="flex flex-wrap">
                    <div ref={ref1} className={`w-1/2 flex items-center ${view1?"animate-slideInLeft":"opacity-0"}`}>
                        <div className='info__intro'>
                            <span className='font-[700] text-[24px] mb-[15px] text-transparent-[capitalize] text-main'>{introInfo[0].sub_title}</span>
                                <h2 className='mt-[15px] font-[700] text-[40px] uppercase text-black'>{introInfo[0].title}</h2>
                                <p className='text-black leading-[26px] mt-[30px] mb-[40px] pr-[200px]'>{introInfo[0].text}
                                    
                                    
                                </p>
                                <div className='flex gap-[100px] mb-[40px]'>
                                        <ul className='pl-[12px] leading-[30px] '>
                                            {introText.filter(item => [1, 2, 3 ,4].includes(item.id)).map((item) => (
                                            <IntroItem
                                                key={item.id}
                                                intro={item}
                                            />  
                                            ))}
                                        </ul>
                                        <ul className='leading-[30px]'>
                                        {introText.filter(item => [5, 6, 7].includes(item.id)).map((item) => (
                                            <IntroItem
                                            key={item.id}
                                            intro={item}
                                            />   
                                        ))}
                                        </ul>
                                </div>  
                                <div className='btn_wrapper'>
                                    <a href="http://">
                                        <Button>
                                             {introInfo[0].buttonText}
                                        </Button>
                                    </a>
                            
                                </div>
                        </div>
                
                    </div>
                    <div ref={ref2} className={`w-1/2 flex justify-end items-center ${view2?"animate-slideInRight":"opacity-0"}`}>
                        <div className="img__introduction">
                            <div className='max-w-full h-[375px] w-[531px] rounded-[10px]  ' style={{backgroundImage: `url(${Image1})`}}>
        
                            </div>
                            <div className='h-[190px] max-w-[280px] mt-[30px] rounded-[10px] bg-cover ' style={{backgroundImage: `url(${Image2})`}}></div>
                            <div className='bg-no-repeat bg-cover h-[285px] max-w-[210px] ml-[300px] mt-[-300px] rounded-[20px] border-solid border-secondary border-[10px]' style={{backgroundImage: `url(${Image3})`}}></div>
                        </div> 
                    
                    </div>
                </div>
        </LayoutContainer>
        
            </div>
        </div>
   
);

}

export default memo(Introduction);