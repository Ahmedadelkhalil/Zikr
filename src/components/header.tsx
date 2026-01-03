"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const nav = [
    {
      title: "ادعيه",
      path: ["/Duaa", "/Duaa/Quraan", "/Duaa/Sunnah"],
    },
    {
      title: "تسابيح",
      path: ["/Tasbeeh"],
    },
    {
      title: "اذكار",
      path: ["/", "/Zikr/SabahZikr", "/Zikr/MassaZikr", "/Zikr/AfterPrayZikr"],
    },
  ];
  const pathname = usePathname();
  return (
    <div className="bg-green_degree">
      <div className="container mx-auto flex flex-col justify-center items-center p-5 text-[#fff]">
        <Link href={`/`}>
          <h1 className="text-4xl sm:text-5xl mb-5">الكلام الطيب</h1>
        </Link>
        <ul className="flex">
          {nav.map((link, indx) => {
            return (
              <Link href={`${link.path[0]}`} key={indx}>
                <li
                  className={`mx-4 text-xl sm:text-3xl ${
                    link.path.includes(pathname)
                      ? "text-text_color font-bold"
                      : ""
                  }`}
                >
                  {link.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
