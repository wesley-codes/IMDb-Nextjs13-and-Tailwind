"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search keywords..."
        value={search}
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 cursor-pointer disabled:text-gray-400 "
      >
        Search
      </button>
    </form>
  );
}
