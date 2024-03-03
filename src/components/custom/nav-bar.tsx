import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";

import Logo from "@/assets/images/logo.png";

import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center space-x-6">
        <Link href="/dashboard">
          <Image
            src={Logo}
            alt="logo"
            width={35}
            height={35}
            className="ml-5 mt-5 mb-5"
          />
        </Link>
        <Link href="/dashboard/convert">Convert</Link>
        <Link href="/dashboard/config">Config</Link>
      </div>
      <div className="flex flex-row items-center space-x-6 mr-5">
        <ModeToggle />
        <Link href="/landing/login">
          <Avatar>
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
