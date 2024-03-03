import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/custom/nav-bar";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <Separator />
      <div className="flex flex-col items-center pt-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dashboard
        </h1>
      </div>
    </div>
  );
}
