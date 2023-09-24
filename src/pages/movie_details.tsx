import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
const MovieDetails = () => {
  const router = useRouter();
  const movie = router.query;
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              className=""
              src={"https://image.tmdb.org/t/p/original" + movie?.poster}
              alt="poster"
              width={370}
              height={500}
            />
          </div>

          <div className="md:w-1/3 mt-4 md:mt-0">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>{movie.releaseDate}</p>
            <p className="font-bold">
              {movie.voteAverage}/10 ({movie.voteCount})
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
