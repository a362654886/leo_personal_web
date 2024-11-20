import { FC } from "react";
import "react-vertical-timeline-component/style.min.css";
import EarthCanvas from "@/components/EarthModal";

const Contact: FC = () => {
  return (
    <div className="mx-auto 10% flex items-center">
      <div className="w-1/2 h-[600px]  p-4 ml-[10rem] mt-[10rem]">
        <h2 className="text-white text-[36px]">Contact.</h2>
        <p className="text-[#d766f5] text-[24px]">
          Email: leolupersonal@gmail.com
        </p>
        <p className="text-[#d766f5] text-[24px]">Phone Number: 0272091817</p>
        <p className="text-[#d766f5] text-[24px]">
          Location: Auckland,New Zealand
        </p>
      </div>
      <div className="w-1/2 h-[600px]  p-4 ">
        <EarthCanvas />
      </div>
    </div>
  );
};
export default Contact;
