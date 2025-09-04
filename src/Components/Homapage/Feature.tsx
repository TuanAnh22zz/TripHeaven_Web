import { memo,FC,JSX } from 'react';
import featureLogoImage1 from '../../assets/images/features-1-1.png';
import featureLogoImage2 from '../../assets/images/features-1-2.png';
import featureLogoImage3 from '../../assets/images/features-1-3.png';
import featureLogoImage4 from '../../assets/images/features-1-4.png';
import LayoutContainer from '../All/LayoutContainer';
import FeatureBackground from '../../assets/images/features.png'

export interface FeatureProps {
        id: number,
        title: string,
        text: string,
        url: string,
}
const infoFeature: FeatureProps[] = [
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

interface RenderFeatureProps {
    feature: FeatureProps
}

const FeatureItem: FC<RenderFeatureProps> = ({feature}) => (
    <div className="bg-main p-[30px] justify-items-center rounded-[20px] text-white text-center group hover:bg-secondary duration-1000 ease-in-out" style={{backgroundImage: `url(${FeatureBackground})`}}>
        <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-[50px] bg-white mb-[40px]">
             <img src={feature.url} alt="feature_1" width={"30px"} height={"35px"}/>
             <div className="absolute top-3 left-0.5 w-5 h-5 bg-yellow-400 rounded-full group-hover:bg-main duration-1000"></div>
             <div className="absolute bottom-3 right-0.5 w-5 h-5 bg-yellow-400 rounded-full group-hover:bg-main duration-1000"></div>
        </div>
        <h3 className='font-[700] mb-[20px]'>{feature.title}</h3>
        <span className='leading-[30px]'>
            {feature.text}
         </span>
    </div>
)


function Feature () {
    return (
            <div className="part feadture">
           
                <LayoutContainer>
                <div className="grid grid-cols-4 gap-x-[50px] ">
                        {infoFeature.map((item) => (
                                <FeatureItem
                                    key={item.id}
                                    feature={item}
                                />
                        ))}
                    </div>
                </LayoutContainer>
            </div>
           
    );
}
export default memo(Feature)