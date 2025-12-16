"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Inbox, Calendar, Search } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items
const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Posts", url: "/posts", icon: Inbox },
  { title: "Categories", url: "/categories", icon: Calendar },
  { title: "Saved Posts", url: "/saved-posts", icon: Search },
];

export default function  AppSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>NextBlog</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url} className="flex items-center gap-2">
                          <item.icon size={18} />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 border-b bg-background">
        <div className="flex items-center justify-between p-4">
          <span className="font-bold text-lg">NextBlog</span>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t p-4 space-y-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3"
              >
                <item.icon size={18} />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile Spacer */}
      <div className="md:hidden h-16" />
    </>
  );
}
