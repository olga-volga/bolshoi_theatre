const postData = async (url, data) => {
	let result = await fetch(url, {
		method: 'POST',
		body: data
	});
	return await result.text();
};

export default postData;