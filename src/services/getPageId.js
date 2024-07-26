import { page } from '../constants/api';
export const getPageId = url => {
	const index = url.indexOf(page);
	const pos = url.slice(index);
	return pos;
};
