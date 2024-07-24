import React, { useEffect, useState } from "react";

// api
import { getData } from "../../services/service";
import { baseUrl, characterUrl } from "../../constants/api";
// components
import { CharactersList } from "../../components/CharactersPage/CharactersList";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async (url) => {
    const { results, info } = await getData(url);
    console.log(info);
    setCharacters(results);
  };

  useEffect(() => {
    getCharacters(baseUrl + characterUrl);
  }, []);

  return (
    <div>
      <CharactersList characters={characters} />
    </div>
  );
};
