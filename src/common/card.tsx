type CardInfoTypes = {
  type?: string;
  status: string;
  content: string;
  Info: string;
  count: number;
};

const Card = ({ type, status, content, count, Info }: CardInfoTypes) => {
  return (
    <div className="bg-card_background shadow-lg my-10 relative p-5 rounded-xl border-t-[3px] border-light_brown">
      <div className=" flex justify-end ">
        <span className="bg-status_background text-text_color font-bold p-2 rounded-md">
          {status}
        </span>
      </div>
      {type === "Quraan" ? (
        <p className="text-center">بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم</p>
      ) : null}
      <p className="text-text_color font-bold text-center text-xl my-4">
        {content}
      </p>
      <p className="text-green_degree font-bold text-center text-[17px] my-4">
        {Info}
      </p>
      <span className="absolute left-5 bottom-0 translate-y-[50%] text-[#fff] bg-light_brown px-7 py-1 rounded-md">
        {`${count} عدد المرات`}
      </span>
    </div>
  );
};

export default Card;
