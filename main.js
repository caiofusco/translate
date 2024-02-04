/*fetch ('https://reqres.in/api/users')
.then((res) => res.json())
.then((data) => console.log(data.data))
.catch((err) => console.log(err))

fetch ('https://reqres.in/api/users', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		name: 'Jorge',
	}),
})
.then((res) => res.json())
.then((data) => console.log(data))
*/

const url = 'https://yandextranslatezakutynskyv1.p.rapidapi.com/detectLanguage';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'd38b50402emshc48d3746f0677f0p1c95bbjsn1445d5ed0956',
		'X-RapidAPI-Host': 'YandexTranslatezakutynskyV1.p.rapidapi.com'
	},
	body: new URLSearchParams({text: '<REQUIRED>'})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}