import React from "react";
import { LoginForm } from "@/components/custom/login-form";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="hidden h-screen flex-col bg-muted p-10 lg:flex dark:border-r">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src={Logo} alt="logo" width="50" height="50" />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ml-4">
            MedScrybe
          </h3>
        </div>
        <div className="relative z-20 mt-auto">
          <p className="text-lg">
            “A better practice begins by spending more time with patients and
            less with paperwork”
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center place-items-center h-screen p-10">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Welcome Back!
          </h1>
          <LoginForm />
          <p className="text-sm text-muted-foreground mt-2">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
