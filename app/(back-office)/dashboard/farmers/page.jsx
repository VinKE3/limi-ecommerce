import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      {/*Header */}
      <PageHeader
        heading="Farmers"
        href="/dashboard/farmers/new"
        linkTitle="Add Farmer"
      />
      {/*Table Actions */}
      {/*Export || Search || delete*/}
      <TableActions />
      <div className="py-6">
        <h2>Table</h2>
      </div>
    </div>
  );
}
