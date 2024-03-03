import React from "react";
import { RegistrationForm } from "@/components/custom/registration-form";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center place-items-center p-10">
      <div className="lg:hidden mb-8">
        <Image src={Logo} alt="logo" width="100" height="50" />
      </div>
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Create an account
      </h1>
      <RegistrationForm />
      <p className="text-sm text-muted-foreground mt-2">
        Already have an account?{" "}
        <Link href="/landing/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
}
