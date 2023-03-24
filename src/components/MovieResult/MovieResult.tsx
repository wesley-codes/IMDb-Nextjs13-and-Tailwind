import React from "react";
import { MovieTypes } from "./_types";
import MovieCard from "../MovieCard";
interface MovieResultProp{
  results:MovieTypes[]
}
export default function MovieResult({results}:MovieResultProp) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </div>
  );
}
