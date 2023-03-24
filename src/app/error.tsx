"use client";
import { useEffect } from "react";

type ErrorTypes = {
  error: string;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorTypes) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h2>Something went wrong</h2>

      <button className="hover:text-amber-600" onClick={() => reset()} >try again</button>
    </div>
  );
}
