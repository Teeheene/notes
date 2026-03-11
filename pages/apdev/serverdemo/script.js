function test() { 
	fetch('http://localhost:3000/')
		.then(res => res.text())
		.then(text => {
			console.log(text)
			const container = document.createElement("div")
			container.innerHTML = text
			document.body.appendChild(container)
		})
}

function testUsers() {
	const container = document.createElement("div")

	fetch('http://localhost:3000/users')
		.then(response => response.json()) //convert json to obj
		.then(data => {
			data.forEach(user => {
				const p = document.createElement('p')
				p.textContent += `${user.id}-${user.name} `
				container.appendChild(p)
			})
		})

		document.body.appendChild(container)
}

function testNonRoute() {
	const container = document.createElement("div")

	fetch('http://localhost:3000/meow')
		.then(response => response.json())
		.then(data => {
			const p = document.createElement('p')
			p.textContent = data.error
			container.appendChild(p)
		})

		document.body.appendChild(container)
}

//fixed form
$("#userform").on("submit", function(e) {
	e.preventDefault() //prevents default page reload
	let name = $("#name").val()

	fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name })
	})
		.then(res => res.json())
		.then(data => {
			console.log("User added: ", data)
		})
})

