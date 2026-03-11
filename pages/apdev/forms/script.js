function write(text) {
	const p = document.createElement("p")
	p.textContent = text
	document.body.appendChild(p)
}

function header(text) {
	const h3 = document.createElement("h3")
	h3.textContent = text
	document.body.appendChild(h3)
}

function link(url, text) {
	const a = document.createElement("a")
	const p = document.createElement("p")

	a.href = url
	a.textContent = text 
	a.target = "_blank"
	document.body.appendChild(a)
	document.body.appendChild(p)
}

$("#submit").on("click", function() {
	//one way 
	let formInputs = $("#myform input")
	for(let input of formInputs) {
		console.log(input.name + ": " + input.value)
	}

	//another way
	let formElement = document.forms.myform //or .forms["myform"]
														//or .forms["myform"]["fname"].value (specify)
	let formData = new FormData(formElement)
	console.log(formData)
	for(let data of formData)
		console.log(data[0] + ": " + data[1])
	//data[0] = input name
	//data[1] = input value
})

//FORM
header("Form notes")
link("https://www.w3schools.com/html/html_form_elements.asp", "form docs")
link("https://www.w3schools.com/js/js_validation.asp", "form validation")

//JSON
header("Json notes")
write("\"field_name\": field_value")
write("String => \"field_name\": \"field_value\"")
write("Numbers => \"field_name\": field_value")
write("Objects => \"field_name\": {\"field_name\": field_value}")
write("Arrays => \"field_name\": [\"Term1\", \"Term2\"]")
write("Boolean => \"field_name\": true")
write("Boolean => \"field_name\": null")
write("JSON.parse(jsonStrings)")
write("JSON.stringify(jsonStrings)")
var jString = '{"name":"Ned", "age":22}'
var x = JSON.parse(jString)
var y = JSON.stringify(jString)
console.log(x)
console.log(y)

//FETCH API
header("Fetch api notes")
link("https://api.jquery.com/jQuery.ajax/", "jquery ajax docu")
write("AJAX: allow webpage to read data from server without reloading")
write("GET: request data from the server")
write("POST: send data from the server")
write("JSON: format for exchanging")
write(".then() => runs after the server opens")
write("==METHODS __ USAGE __ RETURNS (promise) ==")
write("response.json() __ Content-Type: application/json __ js object/array")
write("response.text() __ plain text responses __ string")
write("response.blob() __ binary files __ blob")
write("response.formData() __ form data submissions/resp __ formData")
write("response.arrayBuffer() low-level binary data like audio or video __ arrayBuffere")
write("== DEMO ==")
write("check console to see the fetched users")

console.log("FETCHED USERS BELOW!")

//SAMPLE FETCH
console.log("using fetch() command (1)")
fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})
	.catch(err => console.error(err))

fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	body:JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1,
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})
	.then((response) => response.json())
	.then((json) => console.log(json))

console.log("using $.ajax({}) (2)")
$.ajax({
	url: "https://jsonplaceholder.typicode.com/users",
	method: "GET",
	success: function(data) {
		console.log(data)
	},
	error: function(err) {
		console.error(err)
	}
})

//PROMISES
header("Side: Promises notes")
write("a placeholder for a value that isn't available yet")
write("states: pending, fulfilled, rejected")

const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const success = true
		if(success) {
			resolve("Task completed")
		} else {
			reject("Something went wrong")
		}
	}, 1000)
})

myPromise
	.then(result => {
		console.log("Success: ", result)
	})
	.catch(error => {
		console.log("Error: ", error)
	})

new Promise((resolve) => {
	setTimeout(() => resolve(5), 500)
})
	.then(num => num * 2)
	.then(num => `Result is ${num}`)
	.then(console.log)

//practical ajax with promises
function fakeCall(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(name) {
				resolve(`Hello, ${name}`)
			} else {
				reject("No name provided")
			}
		}, 1000) 
	})
}

fakeCall("Diane")
	.then(greeting => console.log(greeting))
	.catch(err => console.error(err))

function promiseSample() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("foot")
		}, 2000)
	})
}

async function myFunc() {
	try {
		const result = await promiseSample()
		console.log(result)
	} catch(e) {
		console.error(e)
	}
}

myFunc()

