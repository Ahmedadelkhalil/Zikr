import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80dvh",
      }}
      className="font-bold text-xl md:text-2xl lg:text-3xl"
    >
      صحح مسار البحث لتحصل علي النتائج المطلوبه
      <p>
        العودة الي{" "}
        <Link href={"/"} className="underline text-[green]">
          الرئيسيه
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
