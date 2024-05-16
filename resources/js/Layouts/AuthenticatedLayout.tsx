import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { ERole } from "../types/role.enum";

export default function AuthenticatedLayout({
    user,
    header,
    children,
}: PropsWithChildren<{ user?: User; header?: ReactNode }>) {
    return (
        <div className="flex">
            <Sidebar menus={menus}></Sidebar>
            <div className="min-h-screen flex-1 overflow-hidden">
                <Header menus={menus} user={user} />
                <div className="py-5 min-h-[calc(100vh-4rem)]">{children}</div>
            </div>
        </div>
    );
}

export const menus = [
    {
        title: "Ana Sayfa",
        roles: `${ERole.DashboardView}`,
        to: "/dashboard",
        icon: "majesticons:home-line",
    },
    {
        section: "Modüller",
    },
    {
        title: "Üyeler",
        roles: `${ERole.UserView}`,
        to: "/kullanicilar",
        icon: "majesticons:users-line",
    },
    {
        title: "Yöneticiler",
        roles: `${ERole.AdminView}`,
        to: "/yoneticiler",
        icon: "ri:admin-line",
    },
    {
        section: "Ayarlar",
    },
    {
        title: "Ayarlar",
        roles: `${ERole.AdminView}`,
        icon: "majesticons:settings-cog-line",
        children: [
            {
                to: "/profile",
                roles: "",
                title: "Profil Ayarları",
            },
            {
                to: "/ayarlar/sistem",
                roles: "",
                title: "Sistem Ayarları",
            },
            {
                to: "/ayarlar/e-ticaret",
                roles: "",
                title: "E-ticaret Ayarları",
            },
        ],
    },
];
