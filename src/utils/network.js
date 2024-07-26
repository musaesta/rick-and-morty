export const getData = async url => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			console.log('Error');
			return false;
		}

		return await res.json();
	} catch (error) {
		console.log('Error');
		return false;
	}
};
