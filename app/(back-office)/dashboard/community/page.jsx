import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Delete, Download, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      {/*Header */}
      <PageHeader
        heading="Limi Community Trainings"
        href="/dashboard/community/new"
        linkTitle="Add Training"
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
