import React, { useEffect, useState } from "react";
// api
import { getData } from "../../utils/network";
import { getPageId } from "../../services/getPageId";
import { baseUrl, characterUrl } from "../../constants/api";
// components
import { CharactersList } from "../../components/CharactersPage/CharactersList";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

const CharactersPage = ({ setErrorApi }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState("");
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const getCharacters = async (url) => {
    const data = await getData(url);
    if (data) {
      const { results, info } = data;
      const { next, prev } = info;
      setErrorApi(false);
      setNextPage(next);
      setPrevPage(prev);
      setCharacters(results);
    } else {
      setErrorApi(true);
    }
  };
  const handleClickPage = (changePage) => setPage(getPageId(changePage));

  useEffect(() => {
    getCharacters(baseUrl + characterUrl + page);
  }, [page]);

  return (
    <div>
      <CharactersList
        prevPage={prevPage}
        nextPage={nextPage}
        handleClickPage={handleClickPage}
        characters={characters}
      />
    </div>
  );
};
export default withErrorApi(CharactersPage);
