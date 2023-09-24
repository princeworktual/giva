import { MoviesListType, MoviesType } from "@/types/movies_list_type";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const MoviesList = ({ moviesData }: { moviesData: MoviesType[] }) => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {moviesData &&
        moviesData?.map((movie: MoviesType) => (
          <div key={movie?.id} className="relative group">
            <Link
              href={{
                pathname: "/movie_details",
                query: {
                  title: movie.title,
                  poster: movie.poster_path,
                  releaseDate: movie.release_date,
                  voteAverage: movie.vote_average,
                  voteCount: movie.vote_count,
                  description: movie.overview,
                },
              }}
            >
              <Image
                className="opacity-100 group-hover:opacity-70 duration-300"
                src={"https://image.tmdb.org/t/p/original" + movie?.poster_path}
                alt="poster"
                width={300}
                height={300}
              />
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-10 flex justify-center">
                <div className="flex flex-col">
                  <h5 className="row-span-full text-center font-bold">
                    {movie?.title}
                  </h5>
                  <h6 className="row-span-full text-center">
                    {movie?.release_date}
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MoviesList;
