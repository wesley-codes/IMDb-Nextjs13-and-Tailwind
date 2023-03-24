import React from "react";
import { MovieTypes } from "./MovieResult/_types";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
interface MovieCardProps {
  result: MovieTypes;
}
export default function MovieCard(result: MovieCardProps) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group:">
      <Link href={`/movie/${result.result.id}`}>
        <Image
          src={` https://image.tmdb.org/t/p/original/${
            result.result.backdrop_path || result.result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="images not available"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.result.original_title || result.result.name}
          </h2>
          <p className="flex items-center ">
            {result.result.first_air_date || result.result.release_date}{" "}
            <FiThumbsUp className="h-5 mr-1 ml-3"/> {result.result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
