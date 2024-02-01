const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'd38b50402emshc48d3746f0677f0p1c95bbjsn1445d5ed0956',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: new URLSearchParams({
		source_language: 'en',
		target_language: 'pt',
		text: 'What is your name?'
	})
};

try {
	const response = await fetch(url, options);
	const result = await options.text();
	console.log(result);
} catch (error) {
	console.error(error);
}