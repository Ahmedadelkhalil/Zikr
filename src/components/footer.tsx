import Link from "next/link";

const Footer = () => {
  const data = new Date();
  return (
    <div className="bg-green_degree font-bold">
      <div className="container mx-auto flex flex-col justify-center items-center text-[#fff] p-5">
        <span>
          تم انشاء هذا الموقع بواسطه{" "}
          <Link
            href={`https://github.com/Ahmedadelkhalil`}
            target="_blank"
            title="GitHub"
            className="underline"
          >
            احمد عادل
          </Link>
        </span>
        <span>&copy; {data.getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
