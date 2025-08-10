import { memo } from 'react';
import featureLogoImage1 from '../../assets/images/features-1-1.png';
import featureLogoImage2 from '../../assets/images/features-1-2.png';
import featureLogoImage3 from '../../assets/images/features-1-3.png';
import featureLogoImage4 from '../../assets/images/features-1-4.png';

const infoFeature = [
    {
        id: 1,
        title: "Hoạt động đặc biệt",
        text: 'Chúng tôi cam kết mang đến cho bạn những hoạt động đặc biệt và độc đáo trong mỗi chuyến đi. ',
        url: featureLogoImage1      
    },
    {
        id: 2,
        title: " Hướng dẫn tận tâm ",
        text: 'Chúng tôi cam kết mang đến cho bạn những hoạt động đặc biệt và độc đáo trong mỗi chuyến đi. ',
        url: featureLogoImage2    
    },
    {
        id: 3,
        title: "Lịch trình linh hoạt",
        text: 'Chúng tôi cam kết mang đến cho bạn những hoạt động đặc biệt và độc đáo trong mỗi chuyến đi. ',
        url: featureLogoImage3     
    },
    {
        id: 4,
        title: "Điếm đến đa dạng",
        text: 'Chúng tôi cam kết mang đến cho bạn những hoạt động đặc biệt và độc đáo trong mỗi chuyến đi. ',
        url: featureLogoImage4   
    },


]


const FeatureItem = ({title, text, url}) => (
    <div className="info__feature">
        <div className="logo">
             <img src={url} alt="feature_1" width={"30px"} height={"35px"}/>
        </div>
        <h3 className='featurre__title'>{title}</h3>
        <span className='feature__text'>
            {text}
         </span>
    </div>
)


function Feature () {
    return (
            <div className="part feadture">
                <div className="container">
                    <div className="content__feature">
                        {infoFeature.map((item) => (
                                <FeatureItem
                                    key={item.id}
                                    title={item.title}
                                    text={item.text}
                                    url={item.url}
                                />
                        ))}
                    </div>
                </div>
            </div>
           
    );
}
export default memo(Feature)