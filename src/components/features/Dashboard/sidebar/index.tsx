"use client";
import { useLocation } from "react-router-dom";
// import { GoProject } from "react-icons/go";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t } = useTranslation("global");
  const location = useLocation();
  const menuItems = [
    { id: 21, title: t("homepage.messsage"), link: "/", icon: <VscHome /> },
    {
      id: 22,
      title: t("mylist.messsage"),
      link: "/dashboard/favorite",
      icon: <LuBox />,
    },
    {
      id: 23,
      title: t("cart.messsage"),
      link: "/dashboard/cart",
      icon: <IoCartOutline />,
    },
    {
      id: 24,
      title: t("account.messsage"),
      link: "/dashboard/settings",
      icon: <CiUser />,
    }, 
  ];

  return (
    <>
      <div className="h-screen border-x-2 border-t-2 fixed sm:pt-20 lg:pt-20">
        <div>پروفایل کاربری</div>
        <ul className={classNames(`lg:w-60  flex flex-col md:px-4 pt-3`)}>
          {menuItems.map((item) => (
            <Link to={item.link}>
              <li key={item.id}
                className={classNames(
                  `hover:bg-darkblue hover:text-white cursor-pointer mx-2 p-3 
             rounded-sm flex  items-center justify-start gap-2`,
                  location.pathname.includes(item.link.toLowerCase()) &&
                    "bg-background2"
                )}
              >
                <i className="child:text-text-color_1">{item.icon}</i>
                <h4 className="hidden sm:block font-normal">
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </h4>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
