import React from "react";
import { LoginForm } from "@/components/custom/login-form";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col place-items-center justify-center p-10">
      <div className="mb-8 lg:hidden">
        <Image src={Logo} alt="logo" width="100" height="50" />
      </div>
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Welcome Back!
      </h1>
      <LoginForm />
      <p className="text-muted-foreground mt-2 text-sm">
        Don't have an account?{" "}
        <Link href="/signin/register" className="text-blue-600 underline">
          Register
        </Link>
      </p>
    </div>
  );
}
