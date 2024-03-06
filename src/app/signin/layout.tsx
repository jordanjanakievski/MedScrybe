import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center sm:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="hidden h-screen flex-col bg-muted p-10 lg:flex dark:border-r">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src={Logo} alt="logo" width="50" />
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
      {children}
    </div>
  );
}