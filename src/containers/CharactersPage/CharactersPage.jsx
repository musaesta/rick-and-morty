import React, { useEffect, useState } from 'react';
// api
import { getData } from '../../utils/network';
import { getPageId } from '../../services/getPageId';
import { baseUrl, characterUrl } from '../../constants/api';
// components
import { CharactersList } from '../../components/CharactersPage/CharactersList';
import { Pagination } from '../../components/Pagination/Pagination';

export const CharactersPage = () => {
	const [characters, setCharacters] = useState([]);
	const [page, setPage] = useState('');
	const [prevPage, setPrevPage] = useState(null);
	const [nextPage, setNextPage] = useState(null);
	const getCharacters = async url => {
		const data = await getData(url);
		if (data) {
			const { results, info } = data;
			const { next, prev } = info;
			setNextPage(next);
			setPrevPage(prev);
			setCharacters(results);
		}
	};

	const handleClickPage = changePage => setPage(getPageId(changePage));

	useEffect(() => {
		getCharacters(baseUrl + characterUrl + page);
	}, [page]);

	return (
		<div>
			{characters.length > 0 ? (
				<Pagination
					prevPage={prevPage}
					nextPage={nextPage}
					handleClickPage={handleClickPage}
				/>
			) : null}
			<CharactersList characters={characters} />
		</div>
	);
};
