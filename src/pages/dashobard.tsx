"use client";

import React, { useEffect, useState } from "react";

import { API_KEY } from "@/utils/constants";
import Filter from "@/components/filter";
import MoviesList from "@/components/movies_list";
import { MoviesType } from "@/types/movies_list_type";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/search_bar";
import axios from "axios";
import { filterTypes } from "@/types/filter_type";

const Dashobard = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [searchedMovie, setSearchedMovie] = useState<MoviesType[]>([]);
  const [page, setPage] = useState(1);
  const [filterBy, setFilterBy] = useState(filterTypes.Popularity);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${filterBy}`;
    console.log(url);
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((result) => {
        setMovies(result?.data?.results);
        setSearchedMovie(result?.data?.results);
        console.log(result?.data);
      })
      .catch((error) => console.error(error));
  }, [page, filterBy]);

  const updatePage = (isIncrement: boolean) => {
    console.log("called");
    setPage((page) => (isIncrement ? page + 1 : page === 0 ? page : page - 1));
  };

  // Didn't find the api with search filter so applying search filter on current data
  const applySearchFilter = (query: string) => {
    setSearchedMovie(
      movies.filter((movie) => movie.title.toLowerCase().includes(query))
    );
  };

  const applySort = (text: any) => {
    setFilterBy(text);
  };

  return (
    <>
      <div className="column-2">
        <SearchBar onSearch={applySearchFilter} />
        <Filter current={filterBy} onFilter={applySort} />
      </div>
      <MoviesList moviesData={searchedMovie} />
      <Pagination updatePage={updatePage} />
    </>
  );
};

export default Dashobard;
