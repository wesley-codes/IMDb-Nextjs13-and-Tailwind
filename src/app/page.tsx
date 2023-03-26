import MovieResult from "@/components/MovieResult/MovieResult";
import { MovieTypes } from "@/components/MovieResult/_types";
import Pagination from "@/components/Pagination";
import React from "react";

interface HomeProps {
  searchParams: {
    genre: string;
    page: number;
  };
}
const API_KEY = process.env.API_KEY;

const fetchMovies = async (genre: string, page: number) => {
};

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || "fetchTrending";
  const page = searchParams.page === undefined ? 1 : searchParams.page;
  console.log("----", page);

  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 10000 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  const result: MovieTypes[] = data.results;
  return (
    <div className="">
      <MovieResult results={result} />
      <Pagination  currentPage={page}/>
    </div>
  );
}
