"use client";

import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [query, setQuery] = useState();

  function handleSearch() {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}#search`);
  }

  return (
    <div className="w-full h-14 bg-[#EFEEEE] rounded-2xl flex justify-between items-center px-5">
      <input
        type="text"
        placeholder="Search"
        className="focus:outline-none w-full text-black poppins-medium h-3/4 bg-inherit"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") handleSearch();
        }}
        defaultValue={searchParams.get("search")?.toString()}
      />
      <Image src="images/search.svg" alt="" width={32} height={32} />
    </div>
  );
}
