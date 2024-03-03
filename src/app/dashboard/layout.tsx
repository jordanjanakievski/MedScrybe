import { NavBar } from '@/components/custom/nav-bar';
import { Separator } from '@/components/ui/separator';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <Separator />
      {children}
    </div>
  );
};
