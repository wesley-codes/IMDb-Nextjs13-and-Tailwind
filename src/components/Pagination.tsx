"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";

interface PaginationProps{
  currentPage : number
}

export default function Pagination({currentPage}:PaginationProps) {
  const [page, setPage] = useState<number>(1);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    setPage(page - 1);

    console.log(page);
  };

  const handleNextPage = () => {
    
    setPage(page + 1);
    console.log(page);
  };

  return (
    <div className="flex items-center  justify-center ">
      <Link
        href={`/?page=${page}`}
        className="px-5 py-3 dark:bg-amber-500 cursor-pointer rounded-sm hover:bg-orange-400"
        onClick={handlePrevPage}
      >
        {" "}
        <GrChapterPrevious />{" "}
      </Link>
      <span className="mx-5">{currentPage}</span>
      <Link
        onClick={handleNextPage}
        href={`/?page=${page}`}
        className="px-5 py-3 dark:bg-amber-500 cursor-pointer rounded-sm hover:bg-orange-400"
      >
        {" "}
        <GrChapterNext />
      </Link>
    </div>
  );
}
