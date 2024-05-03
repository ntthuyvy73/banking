"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link
                    href="/"
                    className="flex mb-12 cursor-pointer gap-2 items-center"
                >
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="logo"
                        className="max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>
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