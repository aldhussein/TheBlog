"use client";

import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation";




export default  function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = authClient.useSession()

if(session){
   if (session?.user.email != "aldhusseinali@gmail.com"){
    redirect('/')
  }
}
 
  return (
    
    <SidebarProvider>
      <AppSidebar />
      <div className="p-6 w-full">{children}</div>
    </SidebarProvider>
  );
}
