"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderLogo from "./HeaderLogo";

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <HeaderLogo />
                {sidebarLinks.map((item) => {
                    const isActive =
                        pathname === item.route ||
                        pathname.startsWith(`${item.route}`);
                    return (
                        <Link
                            key={item.label}
                            href={item.route}
                            className={cn("sidebar-link", {
                                "bg-bank-gradient": isActive,
                            })}
                        >
                            <div className="relative size-6">
                                <Image
                                    src={item.imgURL}
                                    alt=""
                                    fill
                                    className={cn({
                                        "brightness-[3] invert-0": isActive,
                                    })}
                                />
                            </div>
                            <p
                                className={cn("sidebar-label", {
                                    "!text-white": isActive,
                                })}
                            >
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
                User
            </nav>
            footer
        </section>
    );
};

export default Sidebar;
