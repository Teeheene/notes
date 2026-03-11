function write(text) {
	const p = document.createElement("p")
	p.textContent = text
	document.body.appendChild(p)
}

function header(text) {
	const parentElement = document.getElementById("container")
	const h3 = document.createElement("h3")
	h3.textContent = text
	document.body.appendChild(h3)
}

//SAMPLE DOM
const sample = document.getElementById("sample") 
sample.getElementsByTagName("p")[0].textContent = "ni hao ma im in id of sample edited with a getElementsByTagName"

var sampleClass = sample.getElementsByClassName("header")
sampleClass[0].innerHTML = "arigatou im the header" 

//getting elements
header("getting elements")
write("document.getElementById(id)")
write("document.getElementByTagName(name)")
write("document.getElementByClassName(class)")

//what u can change
header("change content, attribute, styles")
write("==content==")
write(".innerHTML")

//change content demo
var changeContent = sample.getElementsByClassName("txt")
Array.from(changeContent).forEach((e) => {
	e.innerHTML = "New Text"
})

write("==attribute==")
write(".src")
write(".act")

write("==styles==")
write(".style.color")

header("adding elems using node interf")
write("use .createTextNode")
write("ngl you can just use like .innerHTML or .textContent")

var p2 = document.createElement("p")
var node = document.createTextNode("New Text")
p2.appendChild(node)
var elem = document.getElementById("div1")
elem.appendChild(p2)

//or 
elem.innerHTML += "<p>meow</p>"

//or 
p2.textContent = "meow meow"
elem.appendChild(p2)

var deleteMe = elem.getElementBy

header("removing elements")
write(".remove()")
write(".removeChild()")


















