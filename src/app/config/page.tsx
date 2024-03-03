import { NavBar } from "@/components/custom/nav-bar";
import { Separator } from "@/components/ui/separator";

export default function Config() {
  return (
    <div>
      <NavBar />
      <Separator />
      <div className="flex flex-col items-center pt-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Config
        </h1>
      </div>
    </div>
  );
}