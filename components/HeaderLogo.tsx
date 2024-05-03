import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
    return (
        <Link href="/" className=" cursor-pointer flex items-center gap-1 px-4">
            <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="logo"
                className="max-xl:size-14"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Horizon
            </h1>
        </Link>
    );
};

export default HeaderLogo;
