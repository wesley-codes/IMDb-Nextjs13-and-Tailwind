import React from "react";
import Image from "next/image";

export const metadata = {
  title: "IMDB detail page",
  description: "This shows the detail page of each movie",
  keywords: "Next.js, React, JavaScript",
  viewport: "width=device-width, initial-scale=1.0",
};

interface MoviePageProps {
  params: {
    id: string;
  };
}

type AboutMovieType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
};

async function getMovie(movieID: string) {
  const response: Response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`
  );

  return await response.json();
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movieId = params.id;

  const movie: AboutMovieType = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row item-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={` https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="images not available"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        />

        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {" "}
            {movie.title || movie.original_title}
          </h2>
          <p className="text-lg mb-3 ">
            {" "}
            <span className="font-semibold mr-1">Overview: </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>{" "}
            {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
