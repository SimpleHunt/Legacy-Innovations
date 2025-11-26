
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "../../components/Menu"
import Navbar from "../../components/Navbar"
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legacy Innovations",
  description: "CRM",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      
      {/* Left Sidebar */}
      <div className="w-[14%] md:w-[18%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start">
          <Image src="/LegacyLogo.png" alt="Legacy Logo" width={200} height={100} />
        </Link>
        <Menu />
      </div>

      {/* Right Content */}
      <div className="
        w-[86%] 
        md:w-[82%] 
        lg:w-[84%] 
        xl:w-[86%] 
        bg-[#F7F8FA] 
        overflow-scroll
      ">
        <Navbar />
        {children}
      </div>

    </div>
   
  );
}


