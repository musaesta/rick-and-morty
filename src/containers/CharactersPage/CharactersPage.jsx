import React, { useEffect, useState } from "react";
// api
import { getData } from "../../services/service";
import { baseUrl, characterUrl } from "../../constants/api";
// components
import { CharactersList } from "../../components/CharactersPage/CharactersList";
import { Pagination } from "../../components/Pagination/Pagination";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState("");
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  const getCharacters = async (url) => {
    const { results, info } = await getData(url);
    const { next, prev } = info;
    setNextPage(next);
    setPrevPage(prev);
    setCharacters(results);
  };

  const handleClickPage = (changePage) => {
    if (changePage) {
      const index = changePage.indexOf("?page=");
      setPage(changePage.slice(index));
    }
  };

  useEffect(() => {
    getCharacters(baseUrl + characterUrl + page);
  }, [page]);

  return (
    <div>
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        handleClickPage={handleClickPage}
      />
      <CharactersList characters={characters} />
    </div>
  );
};
