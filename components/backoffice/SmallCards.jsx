import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Today Orders",
      sales: 500,
      iconBg: "bg-green-600",
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      sales: 100,
      iconBg: "bg-blue-600",
      icon: Loader2,
    },
    {
      title: "Orders Processing",
      sales: 200,
      iconBg: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Orders Delivered",
      sales: 300,
      iconBg: "bg-pink-600",
      icon: CheckCheck,
    },
  ];
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
    lg:grid-cols-4 gap-4 py-8
    "
    >
      {orderStatus.map((item, i) => {
        return <SmallCard key={i} data={item} />;
      })}
    </div>
  );
}
