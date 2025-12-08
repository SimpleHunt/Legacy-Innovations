"use client";


import Announcements from "@/components/Announcements";
import FormModal from "@/components/FromModel";
import Performance from "@/components/Performance";
import { getSessionUser } from "@/lib/getSessionUser";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// count Details
async function getCount(tableName: string) {
  const res = await fetch(`${baseUrl}/api/${tableName}`, { cache: "no-store" });
  const data = await res.json();
  return data.count;
}


const ProfilePage = () => {
    const [role, setRole] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    
    useEffect(() => {

    const user = getSessionUser();
    setRole(user.role);
    setFullName(user.fullName);
    setEmail(user.email);
     setPhone(user.phone);

     async function fetchCounts() {
    try {
      const [p, f, c, o] = await Promise.all([
        getCount("products"),
        getCount("franchise"),
        getCount("customers"),
        getCount("orders"),
      ]);

      
    } catch (err) {
      console.error("Error fetching counts:", err);
    }
  }

  fetchCounts();

    }, []);


  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            {/*<div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>*/}
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Name: {fullName}</h1>
                
              </div>
              <p className="text-sm text-gray-500">
               Login Role: {role}
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
               
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>{email}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>{phone}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        {/* BOTTOM 
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Profile&apos;s Details</h1>
            <div className="bg-white shadow-sm rounded-lg p-6 border">
              {/* Name Field
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Username"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              {/* Email Address 
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Eamil Address
                </label>

                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
        </div>
         */}
      </div>
     
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/list/product">
              Product&apos;s Details
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/list/order">
              Order &apos;s Details
            </Link>
            
            {/* <Link className="p-3 rounded-md bg-lamaYellowLight" href="/list/franchise">
              Franchise&apos;s Details
            </Link> */}
            
            <Link className="p-3 rounded-md bg-pink-50" href="/list/customer">
              Customer&apos;s Details
            </Link>
            {/* <Link className="p-3 rounded-md bg-lamaSkyLight" href="/list/payment">
              Pamyment&apos;s Tracking
            </Link> */}
          </div>
        </div>
        {/* <Performance /> */}
        {/* <Announcements /> */}
      </div>
    </div>
  );
};

export default ProfilePage;
