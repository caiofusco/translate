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

fetch ('https://yandextranslatezakutynskyv1.p.rapidapi.com/translate', {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'd38b50402emshc48d3746f0677f0p1c95bbjsn1445d5ed0956',
		'X-RapidAPI-Host': 'YandexTranslatezakutynskyV1.p.rapidapi.com'
	},
	body: JSON.stringify({
		lang: 'es',
		text: 'hello'
	}),
})
.then((res) => console.log(res))
.then((data) => console.log(data))
.catch((err) => console.log(err))