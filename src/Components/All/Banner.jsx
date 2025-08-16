import React from "react";
import { memo } from "react";
import BannerBackground from "../../assets/images/All/breadcumb-bg.jpg";
import LayoutContainer from "./LayoutContainer";
function Banner({ text1, text2 }) {
  return (
    <div
      style={{ backgroundImage: `url(${BannerBackground})` }}
      className="bg-no-repeat bg-cover py-[130px]"
    >
      <LayoutContainer>
        <div className="flex flex-wrap">
          <div>
            <h1 className="text-[48px] font-[700] text-white">{text1}</h1>
            <div>
              <span className="text-white">
                <a href="">{text2}</a>
                <span className="px-[10px]">/</span>
                <a href="">{text1}</a>
              </span>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
}

export default memo(Banner);
