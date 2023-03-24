import styles from "./page.module.css";
import MovieResult from "@/components/MovieResult/MovieResult";
import { MovieTypes } from "@/components/MovieResult/_types";

interface SearchParamsProps {
  genre: string;
}

const API_KEY = process.env.API_KEY;
export default async function Home(searchParams: SearchParamsProps) {
  const genre = searchParams.genre || "fetchTrending";
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  const result:MovieTypes[] = data.results;

  console.log(result);
  return (
    <div>
      <MovieResult results={result}/>
    </div>
  )
}
