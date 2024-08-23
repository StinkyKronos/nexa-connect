"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import NavBar from "./component/NavBar";
import Search from "./ui/search";
import Footer from "./component/Footer";
import CheckboxSearch from "./component/CheckboxSearch";
import PropertyCard from "./component/PropertyCard";

export default function Home() {
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState();
  const [distance, setDistance] = useState(10);
  const [filterProperties, setFilterProperties] = useState();
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

  if (search == "")
    return (
      <main className="h-fit w-screen bg-inherit">
        <NavBar link1={"Login"} link2={"About Us"} />
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
        <div className="grid grid-cols-2 h-fit w-screen justify-center items-center px-60 py-16 gap-y-14 gap-x-16 box-border">
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
          <div className="w-full h-full overflow-clip">
            <img
              className="h-full w-full rounded-lg"
              src="images/tile1.jpg"
              alt=""
            />
          </div>
          <div className="w-full h-full overflow-clip">
            <img
              className="h-full w-full rounded-lg"
              src="images/tile2.jpg"
              alt=""
            />
          </div>
          <div className="w-full h-full overflow-clip">
            <img
              className="h-full w-full rounded-lg"
              src="images/tile3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="h-fit w-screen flex flex-col items-center px-20 my-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-black poppins-medium text-5xl">
              meet <span className="text-[#FC813E]">Ankita</span>
            </h2>
            <p className="text-black poppins-medium text-2xl w-1/2">
              your AI chatbot, she helps you to find better deals and does the
              hard work for you so that you don't have to
            </p>
          </div>
          <img className="w-full" src="images/ai-demo.png" alt="" />
        </div>
        <div className="w-screen h-screen">
          <div className="bg-bottom-banner w-full h-5/6 bg-cover flex items-center px-20">
            <div className="bg-black w-1/2 h-3/4 rounded-2xl flex flex-col px-8 py-12 justify-between">
              <p className="text-4xl poppins-medium leading-[50px]">
                Thousands of happy tenants and property owners have trusted us
                to find and manage their homes. <br /> What are you waiting for?
              </p>

              <p className="text-6xl poppins-semibold mb-10">
                Join the <span className="text-[#FC813E]">Community.</span>
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-10">
            <button className="bg-[#FC813E] text-3xl poppins-medium px-16 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );

  return (
    <main className="h-fit w-screen bg-inherit">
      <NavBar link1={"Dashboard"} link2={"Settings"} />
      <flex className="w-screen h-fit flex items-center justify-center">
        <div className="w-[80vw] h-[60vh] bg-cover bg-search-banner rounded-xl mt-32"></div>
      </flex>

      <div className="w-screen min-h-96 flex px-32 my-10 gap-8" id="search">
        <div className="flex-[0.3]">
          <form
            action=""
            className="flex flex-col items-center justify-center gap-5 bg-[#D9D9D9] py-10 px-10 rounded-xl"
          >
            <div className="bg-white w-full px-5 py-2 rounded-xl">
              <div className="w-full flex justify-between">
                <p className="text-[#848484] poppins-medium">0km</p>
                <p className="text-[#848484] poppins-medium">10km</p>
              </div>
              <input
                type="range"
                className="w-full accent-[#FC813E]"
                onChange={(e) => setDistance(e)}
              />
              <p className="text-[#848484] poppins-medium">
                Dist. from College: 7.5km
              </p>
            </div>

            <div className="bg-white w-full px-5 py-2 rounded-xl">
              <p className="text-[#848484] poppins-medium">
                Budget for rent / month
              </p>
              <div className="flex gap-5 mt-2">
                <div className="w-full">
                  <input
                    className="border-[#FC813E] bg-[#FFF3ED] border-2 poppins-medium w-full"
                    type="text"
                  />
                  <p className="text-[#848484] poppins-medium w-fit">min.</p>
                </div>
                <div className="w-full">
                  <input
                    className="border-[#FC813E] bg-[#FFF3ED] border-2 poppins-medium w-full"
                    type="text"
                  />
                  <p className="text-[#848484] poppins-medium w-fit">max.</p>
                </div>
              </div>
            </div>

            <div className="bg-white w-full px-5 py-5 rounded-xl flex items-center justify-center flex-col gap-3">
              <p className="text-[#848484] poppins-medium w-full">Sharing</p>
              <div className="grid grid-cols-2 w-full h-fit gap-5">
                <CheckboxSearch title="Single" />
                <CheckboxSearch title="Double" />
                <CheckboxSearch title="Triple" />
                <CheckboxSearch title="Four" />
              </div>
            </div>

            <div className="bg-white w-full px-5 py-5 rounded-xl flex items-center justify-center flex-col gap-3">
              <p className="text-[#848484] poppins-medium w-full">Gender</p>
              <div className="grid grid-cols-2 w-full h-fit gap-5">
                <CheckboxSearch title="Male" />
                <CheckboxSearch title="Female" />
              </div>
            </div>
          </form>
        </div>
        <div className="flex-[0.7]">
          <div className="w-full h-full">
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
              <Search placeholder="Search" />
            </div>
            <Suspense key={search}></Suspense>
            <div className="h-[60vh] overflow-auto scrollbar-hidden my-5">
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
