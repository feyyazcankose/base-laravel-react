import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { User } from "../types";
import NavLink from "./NavLink";
import ApplicationLogo from "./ApplicationLogo";
import { Link } from "@inertiajs/react";

const AvatarDropdown = ({ user }: { user?: User }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block">
            <button
                className="p-2 rounded-full border-black border"
                onClick={() => setOpen((prev) => !prev)}
            >
                <ApplicationLogo className="w-5 h-5"></ApplicationLogo>
            </button>
            <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                <div
                    className={`z-20 min-w-42 sm:min-w-96 bg-white divide-y divide-gray-100 rounded-lg shadow absolute right-0 top-12 transition-[max-height] duration-300 overflow-hidden ${
                        open ? "max-h-screen" : "max-h-0"
                    }`}
                >
                    <div className="px-4 py-3 text-sm text-gray-900 ">
                        <div>{user?.name}</div>
                        <div className="font-medium truncate">
                            {user?.email}
                        </div>
                    </div>
                    <ul
                        className="py-2 text-sm text-gray-700 "
                        aria-labelledby="avatarButton"
                    >
                        <li>
                            <NavLink
                                className="block px-4 py-2 hover:bg-gray-100 "
                                href="/"
                            >
                                Hesabım
                            </NavLink>
                        </li>
                    </ul>
                    <div className="py-1">
                        <Link
                            href={route("logout")}
                            method="post"
                            className="flex text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                            Çıkış Yap
                        </Link>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default AvatarDropdown;
