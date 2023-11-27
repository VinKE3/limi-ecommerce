"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import {
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Settings,
  Slack,
  Truck,
  User,
  User2,
  UserSquare2,
  Users,
  Warehouse,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { usePathname } from "next/navigation";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Customers",
      icon: <Users />,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: <Warehouse />,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: <UserSquare2 />,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: <Truck />,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: <User />,
      href: "/dashboard/staff",
    },
    {
      title: "Limi Commnuity",
      icon: <Building2 />,
      href: "/dashboard/community",
    },
    {
      title: "Settings",
      icon: <Settings />,
      href: "/dashboard/settings",
    },
    {
      title: "Wallet",
      icon: <CircleDollarSign />,
      href: "/dashboard/wallet",
    },
    {
      title: "Online Store",
      icon: <ExternalLink />,
      href: "/dashboard/online-store",
    },
  ];
  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Sliders",
      icon: MonitorPlay,
      href: "/dashboard/store-sliders",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={
        showSidebar
          ? "sm:block mt-20 sm:mt-0 dark:bg-slate-800 bg-white space-y-6 w-64 h-screen dark:text-slate-300 text-slate-800 fixed top-0 left-0 shadow-md overflow-y-scroll"
          : "mt-20 sm:mt-0 hidden sm:block dark:bg-slate-800 bg-white space-y-6 w-64 h-screen  dark:text-slate-300 text-slate-800 fixed top-0 left-0 shadow-md overflow-y-scroll"
      }
    >
      <Link
        onClick={() => setShowSidebar(false)}
        className="px-6 py-4"
        href="/dashboard"
      >
        <Image alt="logo" src={logo} className="w-36" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Link
          onClick={() => setShowSidebar(false)}
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-600 text-lime-500"
              : "flex items-center space-x-3 px-6 py-2"
          }
          href="/dashboard"
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center space-x-6 py-2"
          >
            <div className="flex items-center space-x-3">
              <Slack />
              <span>Catalogue</span>
            </div>
            {openMenu ? <ChevronDown /> : <ChevronRight />}
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-lg px-3 py-3 pl-6 bg-slate-800">
            {catalogueLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  className={
                    pathname === link.href
                      ? "flex items-center space-x-3 py-1 text-sm text-lime-500"
                      : "flex items-center space-x-3 py-1"
                  }
                  href={link.href}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>
        {sidebarLinks.map((link, i) => {
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={link.href}
              className={
                pathname === link.href
                  ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-600 text-lime-500"
                  : "flex items-center space-x-3 px-6 py-2"
              }
            >
              {link.icon}
              <span>{link.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
