import React, { useEffect, useState } from "react";
// api
import { getData } from "../../services/service";
import { baseUrl, characterUrl } from "../../constants/api";
// components
import { CharactersList } from "../../components/CharactersPage/CharactersList";
import { CustomIcons } from "../../components/Pagination/Pagination";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState();
  const getCharacters = async (url) => {
    const { results, info } = await getData(url);
    const { pages } = info;
    setPages(pages);
    setCharacters(results);
  };

  useEffect(() => {
    getCharacters(baseUrl + characterUrl);
  }, []);

  return (
    <div>
      <CustomIcons pages={pages} />
      <CharactersList characters={characters} />
    </div>
  );
};
