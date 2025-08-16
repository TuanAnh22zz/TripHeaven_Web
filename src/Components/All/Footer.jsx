import { memo } from "react";

import Input from "@mui/joy/Input";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LogoImage1 from "../../assets/images/2-e1709277174419.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PhoneIcon from "@mui/icons-material/Phone";
import ImageBlog1 from "../../assets/images/6-2-342x252.jpg";
import LayoutContainer from "../../Components/All/LayoutContainer";
import Button from "../../Components/All/Button";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import IconHeadSet from "../../assets/images/icons8-headset-80.png";
import IconSend from "../../assets/images/icons8-send-80.png";

function Footer() {
  return (
    <div className="bg-black">
      <LayoutContainer>
        <div className="flex flex-wrap text-white">
          <div className="grid grid-cols-3 gap-x-[80px]">
            <div className="flex items-center gap-4">
              <div className="w-1/4">
                <img
                  src={IconHeadSet}
                  alt=""
                  className="w-[80px] h-[80px] max-w-full"
                />
              </div>
              <div className="w-3/4">
                <h3 className="text-[24px] font-[700]">Gọi 24/7</h3>
                <a href="http://" className="text-[16px]">
                  (+84) 0313728397
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1/4">
                <img
                  src={IconSend}
                  alt=""
                  className="w-[80px] h-[80px] max-w-full"
                />
              </div>
              <div className="w-3/4">
                <h3 className="text-[24px] font-[700]">Subscribe</h3>
                <a href="http://" className="text-[16px]">
                  Đăng ký để cập nhật hàng ngày
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-end">
              <div>
                <Input
                  sx={{
                    backgroundColor: "black",
                    border: "solid",
                    borderWidth: "2px",
                    color: "white",
                  }}
                  className="pt-[15px] pr-[10px] pb-[15px] w-[350px] !border-main"
                  type={"text"}
                  placeholder="Nhập Email"
                  endDecorator={<Button>Gửi</Button>}
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-[80px] border-main" />
        <div className="flex flex-wrap mt-[50px]">
          <div className="grid grid-cols-4">
            <div className="text-white space-y-6">
              <img src={LogoImage1} alt="" />
              <p>
                Trip Heaven mang đến hành trình khám phá trọn vẹn với dịch vụ
                chuyên nghiệp, điểm đến độc đáo và trải nghiệm đáng nhớ cho mọi
                du khách.
              </p>
              <div className="grid grid-cols-4 gap-x-[20px]">
                <div className="w-[45px] h-[45px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center">
                  <a href="http://">
                    <FacebookRoundedIcon />
                  </a>
                </div>
                <div className="w-[45px] h-[45px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center">
                  <a href="http://">
                    <InstagramIcon />
                  </a>
                </div>
                <div className="w-[45px] h-[45px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center">
                  <a href="http://">
                    <GitHubIcon />
                  </a>
                </div>
                <div className="w-[45px] h-[45px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center">
                  <a href="http://">
                    <PermPhoneMsgIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-white space-y-6 pl-[70px]">
              <div className="space-y-2">
                <h4 className="font-[600] text-[20px]">Danh mục</h4>
                <hr className="w-[30%] border-main border-[1px]" />
              </div>
              <div>
                <ul className="space-y-5">
                  <li className="flex items-center gap-x-[5px]">
                    <ArrowForwardIosIcon className="w-1/4 !text-[15px]" />
                    <a className="w-3/4 flex justify-start" href="">
                      Trang chủ
                    </a>
                  </li>
                  <li className="flex items-center gap-x-[5px]">
                    <ArrowForwardIosIcon className="w-1/4 !text-[15px]" />
                    <a className="w-3/4 flex justify-start" href="">
                      Giới thiệu
                    </a>
                  </li>
                  <li className="flex items-center gap-x-[5px]">
                    <ArrowForwardIosIcon className="w-1/4 !text-[15px]" />
                    <a className="w-3/4 flex justify-start" href="">
                      Tour
                    </a>
                  </li>
                  <li className="flex items-center gap-x-[5px]">
                    <ArrowForwardIosIcon className="w-1/4 !text-[15px]" />
                    <a className="w-3/4 flex justify-start" href="">
                      Tin tức
                    </a>
                  </li>
                  <li className="flex items-center gap-x-[5px]">
                    <ArrowForwardIosIcon className="w-1/4 !text-[15px]" />
                    <a className="w-3/4 flex justify-start" href="">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-white space-y-6">
              <div className="space-y-2">
                <h4 className="font-[600] text-[20px]">Liên hệ</h4>
                <hr className="w-[20%] border-main border-[1px]" />
              </div>
              <div>
                <ul className="space-y-5">
                  <li className="flex items-center gap-x-[10px]">
                    <LocationPinIcon />
                    <a href="">
                      1073/23 Cách mạng tháng 8, P7, Q.Tân Bình, TP.HCM
                    </a>
                  </li>
                  <li className="flex items-center gap-x-[10px]">
                    <EmailIcon />
                    <a href="">nguyentuananh22042004@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-x-[10px]">
                    <PhoneIcon />
                    <a href="">(+84) 784223858</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-white space-y-6 pl-[30px]">
              <div className="space-y-2">
                <h4 className="font-[600] text-[20px]">Hình ảnh</h4>
                <hr className="w-[20%] border-main border-[1px]" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap">
                  <div className="grid grid-cols-3 gap-x-[5px]">
                    <img src={ImageBlog1} alt="" className="rounded-[5px]" />
                    <img src={ImageBlog1} alt="" className="rounded-[5px]" />
                    <img src={ImageBlog1} alt="" className="rounded-[5px]" />
                  </div>
                </div>
                <div className="flex flex-wrap pt-[5px]">
                  <div className="grid grid-cols-3 gap-x-[5px]">
                    <img src={ImageBlog1} alt="" className="rounded-[5px]" />
                    <img src={ImageBlog1} alt="" className="rounded-[5px]" />
                    <img src={ImageBlog1} alt="" className="rounded-[5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[80px] border-main" />

        <div className="flex flex-wrap mt-[20px]">
          <div className="grid grid-cols-2 gap-x-[340px]">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div>
                  <span>
                    <CopyrightIcon
                      style={{ color: "white", fontSize: "16px" }}
                    />
                  </span>
                </div>
                <div>
                  <span className="text-white text-[16px] pl-[5px]">
                    Thiết kế và lập trình bởi:
                    <a className="font-[700] text-main" href="">
                      {" "}
                      MonoMedia{" "}
                    </a>
                    /
                    <a className="font-[700] text-main" href="">
                      {" "}
                      Anh Tuan Nguyen
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-white flex items-center justify-center">
                <div>
                  <span>Chính sách bảo mật</span>
                </div>
                <div>
                  <span className="text-main px-[20px] text-[25px]"> | </span>
                </div>
                <div>
                  <span>Điều khoản & điều kiện</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
}

export default memo(Footer);
