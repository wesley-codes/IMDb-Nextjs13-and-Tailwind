import MovieResult from "@/components/MovieResult/MovieResult";
import { MovieTypes } from "@/components/MovieResult/_types";
import React from "react";

interface PageProps {
  params: {
    searchTerm: string;
  };
}

type DataResponse = {
  page: number;
  results: MovieTypes[]; // replace `any` with the actual type of your results
  total_pages: number;
  total_results: number;
};

export default async function page({ params }: PageProps) {
  const searchTerm = params.searchTerm;
  const response: Response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  );

  if (!response.ok) {
    throw new Error("Error fetching Data");
  }
  const data: DataResponse = await response.json();

  const result = data.results;

  return (
    <div>
      {result && result.length === 0 && (
        <h1 className="text-center pt-6"> No result found</h1>
      )}
      {result && <MovieResult results={result} />}
    </div>
  );
}
