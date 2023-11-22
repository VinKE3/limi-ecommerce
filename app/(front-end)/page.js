import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h2 className="text-4xl">Welcome to VinKE Ecommerce</h2>
      <h2>In Development</h2>
      <Link href="/dashboard">
        <button className="mt-2 p-4 bg-slate-600 text-slate-50 rounded-full">
          Go to Dashboard (Only Front)
        </button>
      </Link>
    </div>
  );
}
