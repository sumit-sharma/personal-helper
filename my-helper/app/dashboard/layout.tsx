import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "./_components/Header";
import { AppSidebar } from "./_components/AppSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <SidebarProvider>
        <AppSidebar />

        <main>
          <SidebarTrigger />
          <div className="mt-2 p-2">
          {children}
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
