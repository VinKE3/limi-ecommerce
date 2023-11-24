"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo-dark.svg";
import {
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  LogOut,
  Settings,
  Slack,
  Truck,
  User,
  User2,
  UserSquare2,
  Warehouse,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Catalogue",
      icon: <Slack />,
      href: "/dashboard/catalogue",
    },
    {
      title: "Customers",
      icon: <User2 />,
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
      title: "Staff",
      icon: <User />,
      href: "/dashboard/staff",
    },
    {
      title: "Settings",
      icon: <Settings />,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: <ExternalLink />,
      href: "/dashboard/online-store",
    },
  ];
  return (
    <div
      className="dark:bg-slate-700 bg-white space-y-6 w-64 h-screen
     dark:text-slate-50 text-slate-800 fixed top-0 left-0 shadow-md"
    >
      <Link className="px-6 py-4" href="#">
        <Image alt="logo" src={logo} className="w-36" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Link
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-lime-600 text-lime-500"
              : "flex items-center space-x-3 px-6 py-2"
          }
          href="/dashboard"
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <button className="flex items-center space-x-6 px-6 py-2">
          <div className="flex items-center space-x-3">
            <Slack />
            <span>Catalogue</span>
          </div>
          <ChevronRight />
        </button>
        {sidebarLinks.map((link, i) => {
          return (
            <Link
              key={i}
              className={
                pathname === link.href
                  ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-lime-600 text-lime-500"
                  : "flex items-center space-x-3 px-6 py-2"
              }
              href={link.href}
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
