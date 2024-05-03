import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderLogo from "./HeaderLogo";

const AuthForm = ({ type }: { type: string }) => {
    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <HeaderLogo />
            </header>
        </section>
    );
};

export default AuthForm;
