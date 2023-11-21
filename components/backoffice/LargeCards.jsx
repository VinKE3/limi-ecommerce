import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      period: "Today Orders",
      sales: 5000,
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: 6000,
      color: "bg-blue-600",
    },
    {
      period: "This Month",
      sales: 100000,
      color: "bg-orange-600",
    },
    {
      period: "All-Time Sales",
      sales: 10000000,
      color: "bg-pink-600",
    },
  ];
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
    lg:grid-cols-4 gap-4 py-8
    "
    >
      {orderStats.map((item, i) => {
        return <LargeCard key={i} data={item} />;
      })}
    </div>
  );
}
