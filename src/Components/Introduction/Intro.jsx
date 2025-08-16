import { memo } from "react";
import LayoutContainer from "../../Components/All/LayoutContainer";
import Image1 from "../../assets/images/Introduction/img-2-1.jpg";
import Image2 from "../../assets/images/Introduction/img-2-2.jpg";
import Button from "../All/Button";

const introInfo = {
  sub_title: "Chúng tôi là Trip Haven",
  title: "Trip Haven là lựa chọn tốt nhất cho chuyến đi của bạn.",
  text: "Với hàng ngàn địa điểm du lịch, hướng dẫn du lịch chi tiết và những lời khuyên hữu ích, chúng tôi sẽ giúp bạn lên kế hoạch cho những chuyến đi tuyệt vời và trải nghiệm không thể quên.",
  buttonText: "Xem thêm",
};

const introText = [
  {
    id: 1,
    text: "Địa điểm chi tiết",
  },
  {
    id: 2,
    text: "Đánh giá nhận xét",
  },
  {
    id: 3,
    text: "Thông tin về hồ sơ du lịch",
  },
  {
    id: 4,
    text: "Giao tiếp và chia sẻ kinh nghiệm",
  },
  {
    id: 5,
    text: "Hướng dẫn lịch trình",
  },
  {
    id: 6,
    text: "Đặt vé và đặt phòng trực tuyếng",
  },
  {
    id: 7,
    text: "Tin tức và xu hướng du lịch",
  },
];

const IntroItem = ({ text }) => (
  <li className="list-disc marker:text-main">{text}</li>
);

function Intro() {
  return (
    <div>
      <LayoutContainer>
        <div className="flex flex-wrap">
          <div className="w-1/2 flex mr-auto">
            <div>
              <div className="py-[50px] w-[300px] h-[190px] bg-main flex items-center justify-center rounded-[20px] solid border-white border-[12px] mb-[-90px] ml-[300px]">
                <div className="text-white pr-[50px]">
                  <span className="font-[700] text-[36px]"> 25 Năm </span>
                  <p className="text-[18px] font-[600]">Kinh nghiệm</p>
                </div>
              </div>
              <div className="w-[470px] h-[440px]">
                <img
                  src={Image1}
                  alt=""
                  className="rounded-t-[25%] absolute z-[-2]"
                />
              </div>

              <div className="w-[300px] h-[300px] mt-[-390px] ml-[350px]">
                <img
                  src={Image2}
                  alt=""
                  className="rounded-[50%] solid border-[40px] border-white"
                />
              </div>

              <div className="py-[50px] w-[300px] h-[190px] bg-secondary flex items-center justify-center rounded-[20px] solid border-white border-[12px] ml-[220px] mt-[-40px] absolute z-[-2]">
                <div className="text-white pr-[50px]">
                  <span className="font-[700] text-[36px]"> 20,000+</span>
                  <p className="text-[18px] font-[600]"> Khách hàng</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center mr-auto pl-[50px]">
            <div>
              <span className="font-[700] text-[24px] mb-[15px] text-transparent-[capitalize] text-main">
                {introInfo.sub_title}
              </span>
              <h2 className="mt-[15px] font-[700] text-[40px] uppercase text-black">
                {introInfo.title}
              </h2>
              <p className="text-black leading-[26px] mt-[30px] mb-[40px] pr-[80px]">
                {introInfo.text}
              </p>
              <div className="flex gap-[100px] mb-[40px]">
                <ul className="pl-[12px] leading-[30px] ">
                  {introText
                    .filter((item) => [1, 2, 3, 4].includes(item.id))
                    .map((item) => (
                      <IntroItem key={item.id} text={item.text} />
                    ))}
                </ul>
                <ul className="leading-[30px]">
                  {introText
                    .filter((item) => [5, 6, 7].includes(item.id))
                    .map((item) => (
                      <IntroItem key={item.id} text={item.text} />
                    ))}
                </ul>
              </div>
              <div className="btn_wrapper">
                <a href="http://">
                  <Button>{introInfo.buttonText}</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
}
export default memo(Intro);
