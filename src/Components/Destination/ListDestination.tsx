import { memo,FC,JSX } from 'react';
import LayoutContainer from '../All/LayoutContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Image1 from '../../assets/images/Destination/destinations-1-1.jpg'
import Image2 from '../../assets/images/Destination/destinations-1-2.jpg'
import Image3 from '../../assets/images/Destination/destinations-1-3.jpg'
import Image4 from '../../assets/images/Destination/destinations-1-4.jpg'
import Image5 from '../../assets/images/Destination/destinations-1-5.jpg'
import Image6 from '../../assets/images/Destination/destinations-1-6.jpg'
import Image7 from '../../assets/images/Destination/destinations-1-7.jpg'
import Image8 from '../../assets/images/Destination/destinations-1-8.jpg'
import Image9 from '../../assets/images/Destination/destinations-1-9.jpg'

export interface DestinationProps {
    id: number,
    name: string,
    image: JSX.Element
}
const DetailList: DestinationProps[] = [
    {
        id:1,
        name:'Annapurna',
        image: Image1
    },
    {
        id:2,
        name:'Bhutan',
        image: Image2
    },
    {
        id:3,
        name:'Colombo',
        image: Image3
    },
    {
        id:4,
        name:'England',
        image: Image4
    },
    {
        id:5,
        name:'Everest',
        image: Image5
    },
    {
        id:6,
        name:'France',
        image: Image6
    },
    {
        id:7,
        name:'India',
        image: Image7
    },
    {
        id:8,
        name:'Maldives',
        image: Image8
    },
    {
        id:9,
        name:'Male',
        image: Image9
    },
]

interface RenderDestinationProps {
    destination: DestinationProps
}

const InfoDestination: FC<RenderDestinationProps> = ({destination}) => (
    <div className=''>
        <div className='max-w-full w-[386] h-[405px] rounded-[20px] bg-cover'   style={{ backgroundImage: `url(${destination.image})`}}></div>
        <div className='font-[700] text-[20px] pt-[20px]'>
            <a href="">{destination.name}</a>
            <FontAwesomeIcon icon={faArrowRight} className='pl-[5px] text-[16px]' />
        </div>
    </div>

);
    
      
  

function ListDestination () {
    return (
        <div>
                <LayoutContainer>
                    <div className='grid grid-cols-3 grid-rows-3 gap-x-[30px] gap-y-[50px]'>
                       {DetailList.map((item) => (
                            <InfoDestination
                                key={item.id}
                                destination={item}
                            />
                       ))}
                    </div>
                </LayoutContainer>
            </div>
    );
}

export default memo(ListDestination)