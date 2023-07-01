import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { selectGenreListId } from "../redux/features/playerSlice";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genereTitle = "Pop";

  console.log(data);

  return (
    <>
      <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
          <h2 className='text-3xl text-white font-bold text-left'>
            Discover {genereTitle}
          </h2>
          <select
            value=''
            onChange={() => {}}
            className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
          >
            {genres?.map((genre) => (
              <option value={genre.value} key={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>
        {/* Wrapper div for songs */}
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((song, i) => (
            <SongCard key={song.key} song={song} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
