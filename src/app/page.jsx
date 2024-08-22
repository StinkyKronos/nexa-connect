"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import NavBar from "./component/NavBar";
import Search from "./ui/search";

export default function Home() {
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  const searchParams = useSearchParams();
  let search = searchParams.get("search") ? searchParams.get("search") : "";

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  });

  useEffect(() => {
    if (search) {
      queryDB(search);
    }
  }, [search]);

  const queryDB = async (search) => {
    const { data } = await supabase.from("properties").select();
    setProperties(data);
  };

  if (user) return <main>rfe</main>;

  if (search == "")
    return (
      <main className="h-fit w-screen bg-inherit">
        <NavBar />
        <div className="flex h-screen w-screen justify-center items-center">
          <div className="w-4/5 h-3/4 bg-cover bg-hero-banner rounded-xl flex flex-col items-start justify-center px-10 gap-3">
            <p className="text-3xl poppins-medium">
              find your <span className="text-[#FC813E]">home</span> like room
              now
            </p>
            <Search />
          </div>
        </div>

        <div className="w-screen h-40 bg-[#FCEBE2] flex items-center justify-around px-10">
          <p className="text-black text-3xl poppins-semibold">12k+ clients</p>
          <p className="text-black text-3xl poppins-semibold">25+ cities</p>
          <p className="text-black text-3xl poppins-semibold">875+ hostels</p>
          <p className="text-black text-3xl poppins-semibold">4k+ visits</p>
        </div>

        <div className="grid grid-cols-2 h-screen w-screen justify-center items-center px-32 py-16 gap-y-14">
          <div className="w-full h-full">
            <h2 className="poppins-semibold text-[#FC813E] text-7xl">HOME</h2>
            <p className="poppins-semibold text-black text-5xl mt-3">
              far from home
            </p>
            <p className="poppins-medium text-black text-2xl mt-10">
              Bring a box full of hopes, dreams, ambitions and of course, your
              personal belongings. Everything else has already been taken care
              of.
            </p>
          </div>
          <div className="w-full h-full bg-[url('/images/tile1.png')]">
            {/* <img className="h-full" src="images/tile1.jpg" alt="" /> */}
          </div>
          <div className="w-full h-full ">
            <img className="h-full" src="images/tile2.jpg" alt="" />
          </div>
          <div className="w-full h-full ">
            <img className="h-full" src="images/tile3.jpg" alt="" />
          </div>
        </div>
      </main>
    );

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
      </div>
      <Suspense key={search}></Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
