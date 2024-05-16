import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import clsx from "clsx";
import AvatarDropdown from "./AvatarDropdown";
import { User } from "../types";
import { IMenu } from "../types/menu";
import NavLink from "./NavLink";

const Header = ({ user, menus }: { user?: User; menus: IMenu[] }) => {
    const [open, setOpen] = React.useState(false);
    const [activeMenu, setActiveMenu] = React.useState(null);

    const toggleMenu = (index: any) => {
        if (activeMenu === index) {
            setActiveMenu(null);
        } else {
            setActiveMenu(index);
            if (!open && menus[index].children) {
                setOpen(true);
            }
        }
    };

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 border-b border-b-gray-100 shadow-none h-16">
                <div className="flex flex-wrap justify-between items-center mx-auto ">
                    <div className="flex items-center gap-x-2 lg:order-1">
                        <button
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {/* Go Back Button Start */}
                        <button
                            className="items-center gap-x-2 flex bg-gray-50 hover:bg-gray-100 p-2.5 rounded-lg cursor-pointer text-gray-500"
                            onClick={() => window.history.back()}
                        >
                            <Icon icon="lets-icons:refund-back" />
                            <span className="hidden md:block me-2 text-sm font-semibold">
                                Geri Dön
                            </span>
                        </button>
                        {/* Go Back Button End */}
                    </div>

                    <div className="flex items-center lg:order-2 gap-x-2">
                        {/* <NotificationPopup /> */}
                        <AvatarDropdown user={user} />
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"></div>
                </div>
            </nav>
            <div
                className={clsx(
                    "navbar-menu relative z-50 transition-[max-width] duration-300 overflow-hidden",
                    {
                        hidden: !open,
                    }
                )}
            >
                <button
                    className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
                    onClick={() => setOpen(false)}
                ></button>
                <nav
                    className={clsx(
                        "fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
                    )}
                >
                    <div className="flex items-center mb-8">
                        <button
                            onClick={() => setOpen(false)}
                            className="ml-auto lg:hidden"
                        >
                            <svg
                                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <ul className="pt-6">
                            {menus.map((menu, index) => {
                                if (menu?.roles) {
                                    return menu.roles ? (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                menu.to && setOpen(false);
                                            }}
                                        >
                                            {menu.to ? (
                                                <NavLink
                                                    href={menu.to}
                                                    className={clsx(
                                                        "flex justify-between p-3 cursor-pointer hover:bg-gray-100 text-gray-900 text-sm items-center"
                                                    )}
                                                    onClick={() =>
                                                        toggleMenu(index)
                                                    }
                                                >
                                                    <div className="flex items-center gap-x-4">
                                                        <Icon
                                                            icon={
                                                                menu?.icon ?? ""
                                                            }
                                                        />
                                                        <span
                                                            className={clsx(
                                                                "origin-left duration-200",
                                                                {
                                                                    hidden: !open,
                                                                }
                                                            )}
                                                        >
                                                            {menu.title}
                                                        </span>
                                                    </div>
                                                    {menu.children && (
                                                        <Icon
                                                            icon="mingcute:down-fill"
                                                            className={clsx(
                                                                "transition-transform duration-200",
                                                                {
                                                                    "rotate-180":
                                                                        activeMenu ===
                                                                        index,
                                                                }
                                                            )}
                                                        />
                                                    )}
                                                </NavLink>
                                            ) : (
                                                <div
                                                    className={clsx(
                                                        "flex justify-between p-3 cursor-pointer hover:bg-gray-100 text-gray-900 text-sm items-center",
                                                        {
                                                            active:
                                                                activeMenu ===
                                                                index,
                                                        }
                                                    )}
                                                    onClick={() =>
                                                        toggleMenu(index)
                                                    }
                                                >
                                                    <div className="flex items-center gap-x-4">
                                                        <Icon
                                                            icon={
                                                                menu?.icon ?? ""
                                                            }
                                                        />
                                                        <span
                                                            className={clsx(
                                                                "origin-left duration-200",
                                                                {
                                                                    hidden: !open,
                                                                }
                                                            )}
                                                        >
                                                            {menu.title}
                                                        </span>
                                                    </div>
                                                    {menu.children && (
                                                        <Icon
                                                            icon="mingcute:down-fill"
                                                            className={clsx(
                                                                "transition-transform duration-200",
                                                                {
                                                                    "rotate-180":
                                                                        activeMenu ===
                                                                        index,
                                                                }
                                                            )}
                                                        />
                                                    )}
                                                </div>
                                            )}

                                            {menu.children && (
                                                <ul
                                                    className={clsx(
                                                        "pl-4 transition-[max-height] duration-300 overflow-hidden",
                                                        {
                                                            "max-h-40":
                                                                activeMenu ===
                                                                index,
                                                            "max-h-0":
                                                                activeMenu !==
                                                                index,
                                                        }
                                                    )}
                                                >
                                                    {menu.children.map(
                                                        (child, childIndex) =>
                                                            child.to ? (
                                                                <li
                                                                    onClick={() =>
                                                                        setOpen(
                                                                            false
                                                                        )
                                                                    }
                                                                    key={
                                                                        childIndex
                                                                    }
                                                                >
                                                                    <NavLink
                                                                        href={
                                                                            child.to
                                                                        }
                                                                        key={
                                                                            childIndex
                                                                        }
                                                                        className="flex p-2 cursor-pointer hover:bg-gray-100 text-gray-900 text-sm items-center gap-x-4 mt-2"
                                                                    >
                                                                        <Icon icon="radix-icons:dot-filled" />
                                                                        <span
                                                                            className={`${
                                                                                !open &&
                                                                                "hidden"
                                                                            } origin-left duration-200`}
                                                                        >
                                                                            {
                                                                                child.title
                                                                            }
                                                                        </span>
                                                                    </NavLink>
                                                                </li>
                                                            ) : null
                                                    )}
                                                </ul>
                                            )}
                                        </li>
                                    ) : null;
                                }
                            })}
                        </ul>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © {new Date().getFullYear()}</span>
                        </p>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
