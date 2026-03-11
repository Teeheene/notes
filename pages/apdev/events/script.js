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

//DEMO
const $form = $("form") 
const $textarea = $("textarea")

$form.on("awesome", (e) => {
	//In jQuery events, the native event is wrapped, so you must access the original event like this
	////e.originalEvent.detail
	////NOT e.detail
	console.log(e.originalEvent.detail.text())
})

$textarea.on("input", function() {
	this.dispatchEvent(
		new CustomEvent("awesome", {
			bubbles: true,
			detail: { text: () => $textarea.val() },
		})
	)
})

const funBtn = $('button.fun')
$(funBtn).on('click', function() {
	$('p.fun').toggle();
})

