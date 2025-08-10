import  MaterialButton from '@mui/material/Button'
import { memo } from 'react';

const introInfo  = 
{
    sub_title: 'Giới thiệu',
    title: 'Chuyến đi tốt nhất',
    text:'Chúng tôi đảm bảo chất lượng dịch vụ tốt nhất, đội ngũ hướng dẫn viên chuyên nghiệp và sự tỉ mỉ trong từng chi tiết. Chúng tôi sẽ là người đồng hành đáng tin cậy trong hành trình khám phá thế giới của bạn.',
    buttonText:'Xem thêm',
};

const introText = [
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

const IntroItem = ({text}) => (
    <li>
        {text}
    </li>
)


function Introduction() {
    return (  <div className=" part introduction">
    <div className="background__layer"></div>
    <div className="container">
        <div className="row">
            <div className="col-6 introduction__left">
             <div className='info__intro'>
                <span className='sec_sub-title'>{introInfo.sub_title}</span>
                    <h2 className='sec_title'>{introInfo.title}</h2>
                    <p className='sec_text'>{introInfo.text}
                        
                          
                     </p>
                     <div className='list_intro'>
                            <ul>
                                {introText.filter(item => [1, 2, 3 ,4].includes(item.id)).map((item) => (
                                  <IntroItem
                                    key={item.id}
                                    text={item.text}
                                  />  
                                ))}
                            </ul>
                            <ul>
                               {introText.filter(item => [5, 6, 7].includes(item.id)).map((item) => (
                                   <IntroItem
                                   key={item.id}
                                   text={item.text}
                                 />   
                               ))}
                            </ul>
                    </div>  
                    <div className='btn_wrapper'>
                        <a href="http://">
                            <MaterialButton variant="contained" disableElevation className='muiButton btn_style1'>
                                {introInfo.buttonText}
                            </MaterialButton>
                        </a>
                
                    </div>
             </div>
           
            </div>
            <div className="col-6 introduction__right">
                <div className="img__introduction">
                    <div className='img__intro1'></div>
                    <div className='img__intro2'></div>
                    <div className='img__intro3'></div>
                </div>
             
            </div>
        </div>
    </div>
   
   
</div>);

}

export default memo(Introduction);