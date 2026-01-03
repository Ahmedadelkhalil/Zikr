"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const UpBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 250) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  const goUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    goUp();
  }, [pathname]);
  return (
    <div
      className={`${
        showBtn ? "fixed translate-x-0" : "translate-x-[250%] fixed"
      } right-[35px] bottom-[35px] bg-green_degree z-[9999999] text-3xl text-[#fff] w-[35px] h-[35px] flex justify-center items-center border cursor-pointer transition duration-500 ease-linear`}
      onClick={() => goUp()}
    >
      ↑
    </div>
  );
};

export default UpBtn;
